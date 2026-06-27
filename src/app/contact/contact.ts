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

  submitForm(){
    console.log(this.contactModel());
    this.contactForm().reset({
      name : "",
      email : "",
      subject : "",
      message : ""
    });
    // console.log(this.contactForm.email().errors()[0].message);
    // console.log(this.contactForm.name().errorSummary());
  }
}
