import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { Chat } from '../../services/chat';
import { MarkdownService } from '../../services/markdown';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-hero',
  imports: [MarkdownComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  downloadCv(){
   window.open('assets/resume/AshCV.pdf', '_blank');
  }

  readonly chat = inject(Chat);
  private readonly markdown = inject(MarkdownService);

  @ViewChild('scrollContainer')
  private scrollContainer?:ElementRef<HTMLDivElement>;

  @ViewChild('chatInput')
  private chatInput?:ElementRef<HTMLDivElement>;

  currentMessage = signal('');

  onInputChange(value :string):void{
    this.currentMessage.set(value);
    this.resizeTextArea();
  }
  private resizeTextArea():void{
    const ta = this.chatInput?.nativeElement;
    if(!ta)return;
    ta.style.height = 'auto';
    ta.style.height = '${ta.scrollHeight}px';
  }

  sendMessage(text?:string):void{
    const message = (text ?? this.currentMessage()).trim();
    if(!message || this.chat.loading()) return;

    const ta = this.chatInput?.nativeElement;
    if (ta) ta.style.height = 'auto';

    this.chat.sendMessage(message).subscribe({
      next : ()=>this.scrollToBottom(),
      error : (err)=>console.error(err),
    });

    this.scrollToBottom();
    this.currentMessage.set("");
  }

  onKeyDown(event:KeyboardEvent):void{
    if(event.key!=='Enter' || event.shiftKey)return;
    event.preventDefault();
    this.sendMessage();
  }

  private scrollToBottom() :void{
    setTimeout(()=>{
      const el = this.scrollContainer?.nativeElement;
      if(!el) return;
      el.scrollTo({top:el.scrollHeight,behavior:'smooth'});
    },50);
  }
}
