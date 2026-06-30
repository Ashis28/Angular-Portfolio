import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { About } from '../about/about';
import { Work } from '../work/work';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { Hero } from '../hero/hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Hero,Navbar,About,Work,Contact,Footer,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home{
  
}
