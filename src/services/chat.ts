import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { ChatMessage } from '../models/chat-message.model';

interface ChatResponse {
  reply: string;
}

interface ChatRequest {
  message: string;
  history: {
    role: 'user' | 'assistant';
    content: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class Chat {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://cloudfare1.ashiskumar-dash.workers.dev/chat';

  readonly messages = signal<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: 'assistant',
      content:
        'Hi there 👋 Ask me anything about my experience, skills or projects.',
      timestamp: new Date()
    }
  ]);

  readonly loading = signal(false);

  sendMessage(message: string): Observable<string> {

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    this.messages.update(messages => [
      ...messages,
      userMessage
    ]);

    this.loading.set(true);

    const request: ChatRequest = {
      message,
      history: this.messages().map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    };

    return this.http
      .post<ChatResponse>(this.apiUrl, request)
      .pipe(
        tap(response => {

          const assistantMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: 'assistant',
            content: response.reply,
            timestamp: new Date()
          };

          this.messages.update(messages => {
            const updated = [...messages, assistantMessage];

            return updated.length > 10
              ? updated.slice(-10)
              : updated;
          });

        }),
        map(response => response.reply),
        catchError(err=>{
          const errorMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: 'assistant',
            content:
              "⚠️ Sorry, I couldn't reach my AI service right now.\n\nPlease try again in a few moments.",
            timestamp: new Date()
          };

        this.messages.update(messages => [
          ...messages,
          errorMessage
        ]);

      return throwError(() => err);

      }),
      finalize(() => this.loading.set(false))
      );
  }

}