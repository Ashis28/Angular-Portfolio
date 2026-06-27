import { Component } from '@angular/core';
import { NgFor,TitleCasePipe } from '@angular/common';


interface TechCard{
  name : String;
  subtitle : String;
  iconBg : String;
  iconColor : String;
  icon : "java" | "spring" | "angular" | "dsa" | "docker";
}
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  cards: TechCard[] = [
    {
      name: 'Java',
      subtitle: '2 yrs · Primary',
      iconBg: '#fff1f0',
      iconColor: '#e85d3f',
      icon: 'java',
    },
    {
      name: 'Spring Boot',
      subtitle: '1 yr · Backend',
      iconBg: '#f0fdf4',
      iconColor: '#22c55e',
      icon: 'spring',
    },
    {
      name: 'Angular',
      subtitle: '6 mos · Frontend',
      iconBg: '#fff1f0',
      iconColor: '#dd1b16',
      icon: 'angular',
    },
    {
      name: 'DSA',
      subtitle: '500+ problems',
      iconBg: '#eff6ff',
      iconColor: '#2f5fad',
      icon: 'dsa',
    },
    {
      name: 'Docker',
      subtitle: '1 yr · DevOps',
      iconBg: '#eff6ff',
      iconColor: '#0ea5e9',
      icon: 'docker',
    },
  ];
}
