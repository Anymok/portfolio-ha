import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  repository: string;
  technologies: string[];
  url?: string;
  disabled?: boolean;
  type: 'solo' | 'team';
  features?: string[];
  architecture?: string[];
}

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  selectedProject: Project | null = null;
  isModalOpen = false;

  projects: Project[] = [
    {
      id: 1,
      title: "Portfolio",
      description: "Mon portfolio permet de présenter mes compétences et mes projets.",
      repository: "https://github.com/Anymok/portfolio-ha",
      technologies: ["Angular", "TypeScript", "Vercel"],
      url: "https://www.arthur-heude.dev/",
      disabled: false,
      type: 'solo',
      features: [
        "Optimisation des performances avec lazy loading",
        "Création d'animations fluides et performantes",
        "Design moderne avec glassmorphism",
        "Responsive design pour tous les appareils"
      ],
      architecture: [
        "Application en Angular",
        "Déploiement sur Vercel",
      ]
    },
    {
      id: 2,
      title: "Ubeer",
      description: "Ubeer est fortement inspiré de Uber Eats. C'est une application monolithique web de gestion de commandes pour les brasseries.",
      repository: "https://github.com/orgs/ubeer-aw/repositories",
      technologies: ["React", "Spring Boot", "MySQL","Vercel", "VPS OVH", "Docker"],
      url: "https://ubeer-front.vercel.app/",
      disabled: false,
      type: 'solo',
      features: [
        "Système d'authentification utilisateur (Auth0)",
        "Catalogue de produits avec filtres de recherche",
        "Interface d'administration pour les brasseries",
      ],
      architecture: [
        "Application en React",
        "Application monolithique avec Spring Boot",
        "Connection avec auth0",
        "Base de données MySQL pour la persistance des données",
        "Déploiement sur Vercel"
      ]
    },
    {
      id: 3,
      title: "Archi Flower",
      description: "Archi Flower est une application micro-services avec Ionic (mobile et web) qui permet de commander des fleurs en ligne.",
      repository: "https://gitlab.com/poc-archi-flower",
      technologies: ["Ionic", "Spring boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"],
      url: "https://archiflower-front.vercel.app/",
      disabled: false,
      type: 'solo',
      features: [
        "Parcour du catalogue de fleurs",
        "Commandez des fleurs",
        "Historique de commandes",
        "Mode sombre/clair",
      ],
      architecture: [
        "Application en Ionic",
        "Application micro-services avec Spring Boot",
        "Base de données MySQL pour la persistance des données",
        "Déploiement sur Vercel"
      ]
    },
    {
      id: 4,
      title: "Pomodoro",
      description: "Pomodoro est une application web qui permet de gérer son temps avec un chronomètre. Il est possible de personnaliser le chronomètre et de voir l'historique des dernières sessions.",
      repository: "https://gitlab.com/pomodoro-ra",
      technologies: ["React", "Spring Boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"],
      url: "https://pomodoro-front-gamma.vercel.app/",
      disabled: false,
      type: 'team',
      features: [
        "Chronomètre personnalisable",
        "Historique des sessions",
      ],
      architecture: [
        "Application en React",
        "Application monolithique avec Spring Boot",
        "Base de données MySQL pour l'historisation",
        "Déploiement sur Vercel"
      ]
    },
    {
      id: 5,
      title: "PayeTonKawa",
      description: "PayeTonKawa est une application web qui permet d'acheter du café en ligne.",
      repository: "https://gitlab.com/payetonkawa-varea",
      technologies: ["React", "Node.js", "Tailwind CSS", "Google Cloud Platform", "Docker", "Gitlab CI/CD"],
      url: "https://payetonkawa-varea.vercel.app/",
      disabled: false,
      type: 'team',
      features: [
        "",
      ],
      architecture: [
        "Application en React",
        "Application monolithique avec Node.js",
        "Connexion avec keycloak",
        "Base de données MySQL pour la persistance des données",
        "Déploiement sur Google Cloud Platform"
      ]
    },
  ];

  openModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  onModalClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
