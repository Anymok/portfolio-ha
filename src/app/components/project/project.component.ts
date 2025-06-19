import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  repository: string;
  demo?: string;
  technologies: string[];
}

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects: Project[] = [
    {
      id: 1,
      title: "Portfolio",
      description: "Mon portfolio permet de présenter mes compétences et mes projets.",
      repository: "https://github.com/Anymok/portfolio-ha",
      technologies: ["Angular", "TypeScript", "Vercel"]
    },
    {
      id: 2,
      title: "Ubeer",
      description: "Ubeer est fortement inspiré de Uber Eats. C'est une application monolithique web de gestion de commandes pour les brasseries.",
      repository: "https://github.com/orgs/ubeer-aw/repositories",
      technologies: ["React", "Spring Boot", "MySQL","Vercel", "VPS OVH", "Docker"]
    },
    {
      id: 3,
      title: "Archi Flower",
      description: "Archi Flower est une application micro-services avec Ionic (mobile et web) qui permet de commander des fleurs en ligne.",
      repository: "https://gitlab.com/poc-archi-flower",
      technologies: ["Ionic", "Spring boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"]
    },
    {
      id: 4,
      title: "Pomodoro",
      description: "Pomodoro est une application web qui permet de gérer sont temps avec un timer et un chronomètre.",
      repository: "https://gitlab.com/pomodoro-ra",
      technologies: ["React", "Spring Boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"]
    },
    {
      id: 5,
      title: "PayeTonKawa",
      description: "PayeTonKawa est une application web qui permet d'acheter du café en ligne.",
      repository: "https://gitlab.com/payetonkawa-varea",
      technologies: ["React", "Node.js", "Tailwind CSS", "Google Cloud Platform", "Docker", "Gitlab CI/CD"]
    },
  ];
}
