import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
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
      image: "https://via.placeholder.com/400x200/4a6bff/ffffff?text=Portfolio",
      repository: "https://github.com/Anymok/portfolio-ha",
      technologies: ["Angular", "TypeScript", "SCSS", "HTML5"]
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description: "Application web complète pour la gestion de tâches avec authentification, CRUD et interface intuitive. Développée avec Django et PostgreSQL.",
      image: "https://via.placeholder.com/400x200/7d4fff/ffffff?text=Task+Manager",
      repository: "https://github.com/Anymok/task-manager",
      technologies: ["Django", "Python", "PostgreSQL", "Bootstrap"]
    },
    {
      id: 3,
      title: "API REST - Gestion d'Utilisateurs",
      description: "API REST complète avec authentification JWT, gestion des utilisateurs et documentation Swagger. Déployée sur Google Cloud Platform.",
      image: "https://via.placeholder.com/400x200/ff6b6b/ffffff?text=API+REST",
      repository: "https://github.com/Anymok/user-management-api",
      technologies: ["Django REST", "JWT", "GCP", "Docker"]
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Dashboard interactif pour visualiser des données avec graphiques dynamiques et filtres avancés. Intégration avec différentes sources de données.",
      image: "https://via.placeholder.com/400x200/4ecdc4/ffffff?text=Dashboard",
      repository: "https://github.com/Anymok/analytics-dashboard",
      technologies: ["React", "Node.js", "Chart.js", "MongoDB"]
    },
    {
      id: 5,
      title: "Application Mobile E-commerce",
      description: "Application mobile cross-platform pour un site e-commerce avec panier, paiements et notifications push. Développée avec Ionic et Angular.",
      image: "https://via.placeholder.com/400x200/45b7d1/ffffff?text=E-commerce+App",
      repository: "https://github.com/Anymok/ecommerce-mobile",
      technologies: ["Ionic", "Angular", "Firebase", "Stripe"]
    }
  ];
}
