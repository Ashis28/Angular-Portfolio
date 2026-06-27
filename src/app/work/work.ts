import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
interface Project{
  category : String;
  title : String;
  description : String;
  tags : string[];
  githubUrl : String;
  images : String[];
}
@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work implements OnInit ,OnDestroy{
    projects: Project[] = [
    {
      category: 'BACK-END · JAVA',
      title: 'MedFlow',
      description: 'Distributed pharmacy management backend built on 8 independently deployable microservices with Netflix Eureka service discovery, JWT authentication, and live Grafana APM monitoring across 33+ REST APIs.',
      tags: ['Java 17', 'Spring Boot', 'Spring Cloud', 'MySQL', 'Docker'],
      githubUrl: 'https://github.com/Ashis28',
      images:[
        'assets/MedFlow/home.jpeg',
        'assets/MedFlow/login.jpeg',
        'assets/MedFlow/medicine.jpeg',
      ]

    },
    {
      category: 'AI · COMPUTER VISION',
      title: 'Malaria Cell Detector',
      description: 'CNN-based binary classifier trained on 27,000+ microscopy images. Deep architecture with Batch Normalisation and Dropout achieves high generalisation accuracy using TensorFlow and OpenCV.',
      tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'NumPy'],
      githubUrl: 'https://github.com/Ashis28',
      images:[
        'assets/Malaria/malaria1.png',
        'assets/Malaria/malaria2.png',
        'assets/Malaria/malaria3.png',
      ]
    },
  ];


  activeSlides : number[] = [];
  paused : boolean[] = [];
  private timers : ReturnType<typeof setInterval>[] = [];
  private touchStartX = 0;

  ngOnInit(): void {
    this.activeSlides = this.projects.map(()=>0);
    this.paused = this.projects.map(()=>false);
    this.projects.forEach((banana,i)=>this.startTimer(i));
  };
  ngOnDestroy(): void {
    this.timers.forEach(clearInterval);
  }

  private startTimer(pi : number) : void {
    this.timers[pi] = setInterval(()=>{
      if(!this.paused[pi]) this.next(pi);
    },3000);
  };
  next(pi : number):void{
    this.activeSlides[pi] = (this.activeSlides[pi]+1) % this.projects[pi].images.length;
  }

  prev(pi : number):void{
    const len = this.projects[pi].images.length;
    this.activeSlides[pi] = (this.activeSlides[pi]-1 + len)%len;
  }
  goTo(pi: number, si: number): void {
    this.activeSlides[pi] = si;
  }

  onTouchStart(e: TouchEvent, pi: number): void {
    this.touchStartX = e.changedTouches[0].screenX;
    this.paused[pi] = true;
  }

  onTouchEnd(e: TouchEvent, pi: number): void {
    const diff = this.touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) diff > 0 ? this.next(pi) : this.prev(pi);
    this.paused[pi] = false;
  }
  setPaused(pi: number, val: boolean): void {
    this.paused[pi] = val;
  }
}
