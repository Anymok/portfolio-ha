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
      title: "Portfolio Personnel",
      description: "Un portfolio moderne développé avec Angular pour présenter mes compétences et projets. Interface responsive avec animations fluides et design épuré.",
      repository: "https://github.com/Anymok/portfolio-ha",
      technologies: ["Angular", "TypeScript", "SCSS", "HTML5"]
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description: "Application web complète pour la gestion de tâches avec authentification, CRUD et interface intuitive. Développée avec Django et PostgreSQL.",
      repository: "https://github.com/Anymok/task-manager",
      technologies: ["Django", "Python", "PostgreSQL", "Bootstrap"]
    },
    {
      id: 3,
      title: "API REST - Gestion d'Utilisateurs",
      description: "API REST complète avec authentification JWT, gestion des utilisateurs et documentation Swagger. Déployée sur Google Cloud Platform.",
      repository: "https://github.com/Anymok/user-management-api",
      technologies: ["Django REST", "JWT", "GCP", "Docker"]
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Dashboard interactif pour visualiser des données avec graphiques dynamiques et filtres avancés. Intégration avec différentes sources de données.",
      repository: "https://github.com/Anymok/analytics-dashboard",
      technologies: ["React", "Node.js", "Chart.js", "MongoDB"]
    },
    {
      id: 5,
      title: "Application Mobile E-commerce",
      description: "Application mobile cross-platform pour un site e-commerce avec panier, paiements et notifications push. Développée avec Ionic et Angular.",
      repository: "https://github.com/Anymok/ecommerce-mobile",
      technologies: ["Ionic", "Angular", "Firebase", "Stripe"]
    }
  ];
}
