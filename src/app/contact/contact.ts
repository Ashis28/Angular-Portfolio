import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { min } from 'rxjs';

interface contact{
  name : string,
  email : string,
  subject : string;
  message : string;
}
@Component({
  selector: 'app-contact',
  imports: [FormField],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactModel = signal<contact>({
    name : "",
    email : "",
    subject : "",
    message : ""
  })
  contactForm = form(this.contactModel, (s) => {
    required(s.name,    { message: 'Name is required' });
    minLength(s.name, 3, { message: 'Name must be at least 3 characters' });
    required(s.email,   { message: 'Email is required' });
    email(s.email,      { message: 'Please enter a valid email' });
    required(s.subject, { message: 'Subject is required' });
    required(s.message, { message: 'Message is required' });
  });
  isSubmitting = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');

  
    async submitForm(): Promise<void>{
    console.log(this.contactModel());

    this.isSubmitting.set(true);

    const playLoad = {
      access_key: '5d0e391b-4ea6-4e80-8629-dfb9ff0e443f',

      name: this.contactForm.name().value(),
      email: this.contactForm.email().value(),
      subject: this.contactForm.subject().value(),
      message: this.contactForm.message().value()
    };
    try{
    const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playLoad)
        });

        const result = await response.json();

        if (response.ok) {
            this.contactForm().reset({
            name : "",
            email : "",
            subject : "",
            message : ""
          });

          this.submitStatus.set('success');
        } 
      }catch(error){
        this.submitStatus.set("error");
      }finally{
        this.isSubmitting.set(false);
      }
    
    // console.log(this.contactForm.email().errors()[0].message);
    // console.log(this.contactForm.name().errorSummary());
  }
}
