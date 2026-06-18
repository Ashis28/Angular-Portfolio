import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { min } from 'rxjs';

interface contact{
  name : string,
  email : string,
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
    message : ""
  })
  contactForm = form(this.contactModel,(schemaPath) =>{
    required(schemaPath.name, {message : "Name is required"});
    required(schemaPath.email, {message : "email is required"});
    email(schemaPath.email,{message:"Plz enter a valid email"});
    minLength(schemaPath.name,3,{message : "Name Length must be greater then 3"});
  });

  submitForm(){
    console.log(this.contactModel());
    this.contactForm().reset({
      name : "",
      email : "",
      message : ""
    });
    // console.log(this.contactForm.email().errors()[0].message);
    // console.log(this.contactForm.name().errorSummary());
  }
}
