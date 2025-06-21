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
  architecture?: string;
  features?: string[];
  challenges?: string[];
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
      architecture: "Application Angular standalone avec architecture modulaire. Utilisation de services pour la gestion des animations et des interactions.",
      features: [
        "Design responsive avec animations fluides",
        "Sections interactives (Accueil, Projets, Compétences, Contact)",
        "Effet de typing animé sur la page d'accueil",
        "Cartes de projets avec technologies et liens",
        "Formulaire de contact fonctionnel"
      ],
      challenges: [
        "Optimisation des performances avec lazy loading",
        "Création d'animations fluides et performantes",
        "Design moderne avec glassmorphism",
        "Responsive design pour tous les appareils"
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
      architecture: "Architecture monolithique avec frontend React et backend Spring Boot. Base de données MySQL pour la persistance des données.",
      features: [
        "Système d'authentification utilisateur",
        "Catalogue de produits avec filtres",
        "Panier d'achat avec gestion des quantités",
        "Système de commandes en temps réel",
        "Interface d'administration pour les brasseries",
        "Gestion des paiements"
      ],
      challenges: [
        "Gestion de la concurrence pour les commandes",
        "Optimisation des performances de la base de données",
        "Sécurisation des paiements",
        "Interface utilisateur intuitive et responsive"
      ]
    },
    {
      id: 3,
      title: "Archi Flower",
      description: "Archi Flower est une application micro-services avec Ionic (mobile et web) qui permet de commander des fleurs en ligne.",
      repository: "https://gitlab.com/poc-archi-flower",
      technologies: ["Ionic", "Spring boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"],
      url: "",
      disabled: true,
      type: 'team',
      architecture: "Architecture micro-services avec API Gateway. Frontend Ionic pour mobile et web. Services séparés pour la gestion des commandes, utilisateurs et produits.",
      features: [
        "Application mobile et web avec Ionic",
        "Système de micro-services",
        "API Gateway pour la gestion des requêtes",
        "Base de données distribuée",
        "Pipeline CI/CD avec GitLab"
      ],
      challenges: [
        "Coordination entre les micro-services",
        "Gestion de la cohérence des données",
        "Déploiement et orchestration des services",
        "Performance avec l'architecture distribuée"
      ]
    },
    {
      id: 4,
      title: "Pomodoro",
      description: "Pomodoro est une application web qui permet de gérer sont temps avec un timer et un chronomètre.",
      repository: "https://gitlab.com/pomodoro-ra",
      technologies: ["React", "Spring Boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"],
      url: "https://pomodoro-front-gamma.vercel.app/",
      disabled: false,
      type: 'team',
      architecture: "Application web React avec backend Spring Boot. Base de données MySQL pour sauvegarder les sessions de travail.",
      features: [
        "Timer Pomodoro personnalisable (25/5/15 minutes)",
        "Chronomètre pour le suivi du temps",
        "Historique des sessions de travail",
        "Statistiques de productivité",
        "Notifications sonores et visuelles",
        "Mode sombre/clair"
      ],
      challenges: [
        "Précision du timer en JavaScript",
        "Gestion des notifications navigateur",
        "Interface utilisateur intuitive",
        "Sauvegarde des données utilisateur"
      ]
    },
    {
      id: 5,
      title: "PayeTonKawa",
      description: "PayeTonKawa est une application web qui permet d'acheter du café en ligne.",
      repository: "https://gitlab.com/payetonkawa-varea",
      technologies: ["React", "Node.js", "Tailwind CSS", "Google Cloud Platform", "Docker", "Gitlab CI/CD"],
      url: "",
      disabled: true,
      type: 'team',
      architecture: "Stack MERN (MongoDB, Express, React, Node.js) avec déploiement sur Google Cloud Platform. Interface moderne avec Tailwind CSS.",
      features: [
        "Catalogue de cafés avec filtres",
        "Système de panier et commandes",
        "Authentification utilisateur",
        "Gestion des stocks en temps réel",
        "Interface d'administration",
        "Paiements sécurisés"
      ],
      challenges: [
        "Intégration avec Google Cloud Platform",
        "Gestion des stocks en temps réel",
        "Optimisation des performances",
        "Sécurisation des données sensibles"
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
