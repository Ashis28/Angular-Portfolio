import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  downloadCv(){
   window.open('assets/resume/AshCV.pdf', '_blank');
  }
}
