import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

interface ExperienceItem{
  role : string;
  company : string;
  duration : string;
  description: string;
  tags : string[];
  logo : string;
}
interface Certificate {
  name : String;
  imageUrl : String;
}

interface Education{
  degree : string;
  school : string;
  duration : string;
  cgpa : string;
  logo : string;
}
@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

  experiences : ExperienceItem[] = [
    {
      role: 'Software Engineer Intern',
      company: 'Capgemini',
      duration: 'Dec 2025 — May 2026',
      description: 'Completed training in Core Java, Spring Boot and Angular. Built a production-grade application using JWT authentication and Docker.',
      tags: ['Java', 'Spring Boot', 'Angular', 'Docker'],
      logo: '/assets/companies/Capgemini.png',
    },
    {
      role: 'AI & Computer Vision Intern',
      company: 'Terafac Technologies',
      duration: 'Aug 2025 — Nov 2025',
      description: 'Validated motion paths and joint reachability for ABB and FANUC robot simulators across 100+ poses, reducing simulation errors by 40%.',
      tags: ['Python', 'OpenCV', 'C++'],
      logo: '/assets/companies/terafac.png',
    },
  ]

  education: Education = {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Lovely Professional University',
    duration: '2022 - 2026',
    cgpa: '8.47',
    logo: '/assets/companies/lpu.png',
  };

  certicicates : Certificate[] = [
    { name: 'Supervised ML: Regression & Classification', imageUrl: '/assets/certificates/Coursera Q8QE33ENHUUZ.jpg' },
    { name: 'Deep Learning', imageUrl: '/assets/certificates/Deep Learning - IIT Ropar.jpg' },
    { name: 'DSA using C & C++', imageUrl: '/assets/certificates/DSA Udemy.jpg' },
    { name: 'Database & SQL for Data Science', imageUrl: '/assets/certificates/Database and SQL for Data Science with Python.jpg' },
    { name: 'C++ Programming', imageUrl: '/assets/certificates/C++_lpucolab.jpg' },
    { name: 'Generative AI', imageUrl: '/assets/certificates/Generative Ai.jpg' },
  ];
}
