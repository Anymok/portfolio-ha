import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

interface Repository {
  url: string;
  title: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  repositories: Repository[];
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

  projects: Project[] = [];
  projectsFr: Project[] = [
    {
      id: 1,
      title: "Portfolio",
      description: "Mon portfolio permet de présenter mes compétences et mes projets.",
      repositories: [
        {
          url: "https://github.com/Anymok/portfolio-ha",
          title: "GitHub"
        }
      ],
      technologies: ["Angular", "TypeScript", "Vercel"],
      url: "https://www.arthur-heude.dev/",
      disabled: false,
      type: 'solo',
      features: [
        "Optimisation des performances grâce au lazy loading",
        "Création d'animations fluides et performantes", 
        "Design moderne avec glassmorphism",
        "Responsive design pour tous les appareils"
      ],
      architecture: [
        "Application développée en Angular",
        "Déploiement sur Vercel",
      ]
    },
    {
      id: 2,
      title: "Ubeer",
      description: "Ubeer est fortement inspirée d'Uber Eats. C'est une application web monolithique de gestion de commandes pour les brasseries.",
      repositories: [
        {
          url: "https://github.com/orgs/ubeer-aw/repositories",
          title: "GitHub"
        },
        {
          url: "https://github.com/Anymok/ubeer-frontend",
          title: "Frontend"
        },
        {
          url: "https://github.com/Anymok/ubeer-backend",
          title: "Backend"
        }
      ],
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
        "Application développée en React",
        "Application monolithique avec Spring Boot",
        "Connexion avec Auth0",
        "Base de données MySQL pour la persistance des données",
        "Déploiement sur Vercel"
      ]
    },
    {
      id: 3,
      title: "Archi Flower",
      description: "Archi Flower est une application en microservices développée avec Ionic (mobile et web), qui permet de commander des fleurs en ligne.",
      repositories: [
        {
          url: "https://gitlab.com/poc-archi-flower",
          title: "GitLab"
        }
      ],
      technologies: ["Ionic", "Spring boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"],
      url: "https://archiflower-front.vercel.app/",
      disabled: false,
      type: 'solo',
      features: [
        "Parcours du catalogue de fleurs",
        "Commande de fleurs en ligne",
        "Historique des commandes",
        "Mode sombre / clair",
      ],
      architecture: [
        "Application développée avec Ionic",
        "Architecture microservices avec Spring Boot",
        "Base de données MySQL pour la persistance des données",
        "Déploiement sur Vercel"
      ]
    },
    {
      id: 4,
      title: "Pomodoro",
      description: "Pomodoro est une application web qui permet de gérer son temps à l'aide d'un chronomètre. Il est possible de personnaliser le minuteur et de consulter l'historique des dernières sessions.",
      repositories: [
        {
          url: "https://gitlab.com/pomodoro-ra",
          title: "GitLab"
        }
      ],
      technologies: ["React", "Spring Boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"],
      url: "https://pomodoro-front-gamma.vercel.app/",
      disabled: false,
      type: 'team',
      features: [
        "Chronomètre personnalisable",
        "Historique des sessions",
      ],
      architecture: [
        "Application développée avec React",
        "Application monolithique avec Spring Boot",
        "Base de données MySQL pour l'historisation",
        "Déploiement sur Vercel"
      ]
    },
    {
      id: 5,
      title: "PayeTonKawa",
      description: "PayeTonKawa est une application web qui permet d'acheter du café en ligne.",
      repositories: [
        {
          url: "https://gitlab.com/payetonkawa-varea",
          title: "GitLab"
        }
      ],
      technologies: ["React", "Node.js", "Tailwind CSS", "Google Cloud Platform", "Docker", "Gitlab CI/CD"],
      url: "https://payetonkawa-front.vercel.app/",
      disabled: false,
      type: 'team',
      features: [
        "",
      ],
      architecture: [
        "Application développée avec React",
        "Application monolithique avec Node.js",
        "Connexion avec Keycloak",
        "Base de données MySQL pour la persistance des données",
        "Déploiement sur Google Cloud Platform"
      ]
    },
  ];

  projectsEn: Project[] = [
    {
      id: 1,
      title: "Portfolio",
      description: "My portfolio showcases my skills and projects.",
      repositories: [
        {
          url: "https://github.com/Anymok/portfolio-ha",
          title: "Frontend"
        }
      ],
      technologies: ["Angular", "TypeScript", "Vercel"],
      url: "https://www.arthur-heude.dev/",
      disabled: false,
      type: 'solo',
      features: [
        "Performance optimization with lazy loading",
        "Smooth and performant animations",
        "Modern design with glassmorphism",
        "Responsive design for all devices"
      ],
      architecture: [
        "Application developed with Angular",
        "Deployment on Vercel",
      ]
    },
    {
      id: 2,
      title: "Ubeer",
      description: "Ubeer is heavily inspired by Uber Eats. It's a monolithic web application for managing brewery orders.",
      repositories: [
        {
          url: "https://github.com/Anymok/ubeer-front",
          title: "Frontend"
        },
        {
          url: "https://github.com/Anymok/ubeer-back",
          title: "Backend"
        }
      ],
      technologies: ["React", "Spring Boot", "MySQL","Vercel", "VPS OVH", "Docker"],
      url: "https://ubeer-front.vercel.app/",
      disabled: false,
      type: 'solo',
      features: [
        "User authentication system (Auth0)",
        "Product catalog with search filters",
        "Administration interface for breweries",
      ],
      architecture: [
        "Application developed with React",
        "Monolithic application with Spring Boot",
        "Auth0 connection",
        "MySQL database for data persistence",
        "Deployment on Vercel"
      ]
    },
    {
      id: 3,
      title: "Archi Flower",
      description: "Archi Flower is a microservices application developed with Ionic (mobile and web) that allows ordering flowers online.",
      repositories: [
        {
          url: "https://github.com/Anymok/archiflower-front",
          title: "Frontend"
        },
        {
          url: "https://github.com/Anymok/archiflower-cart-service",
          title: "Backend Cart"
        },
        {
          url: "https://github.com/Anymok/archiflower-catalog-service",
          title: "Backend Catalog"
        },
        {
          url: "https://github.com/Anymok/archiflower-order-service",
          title: "Backend Order"
        }
      ],
      technologies: ["Ionic", "Spring boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"],
      url: "https://archiflower-front.vercel.app/",
      disabled: false,
      type: 'solo',
      features: [
        "Browse flower catalog",
        "Order flowers online",
        "Order history",
        "Dark / light mode",
      ],
      architecture: [
        "Application developed with Ionic",
        "Microservices architecture with Spring Boot",
        "MySQL database for data persistence",
        "Deployment on Vercel"
      ]
    },
    {
      id: 4,
      title: "Pomodoro",
      description: "Pomodoro is a web application that helps manage time using a timer. You can customize the timer and view the history of recent sessions.",
      repositories: [
          {
            url: "https://github.com/Anymok/pomodoro-front",
            title: "Frontend"
          },
          {
            url: "https://github.com/Anymok/pomodoro-back",
            title: "Backend"
          }
      ],
      technologies: ["React", "Spring Boot", "MySQL", "Vercel", "VPS OVH", "Docker", "Gitlab CI/CD"],
      url: "https://pomodoro-front-gamma.vercel.app/",
      disabled: false,
      type: 'team',
      features: [
        "Customizable timer",
        "Session history",
      ],
      architecture: [
        "Application developed with React",
        "Monolithic application with Spring Boot",
        "MySQL database for history",
        "Deployment on Vercel"
      ]
    },
    {
      id: 5,
      title: "PayeTonKawa",
      description: "PayeTonKawa is a web application for buying coffee online.",
      repositories: [
        {
          url: "https://github.com/Anymok/payetonkawa-front",
          title: "Frontend"
        },
        {
          url: "https://github.com/Anymok/payetonkawa-product-service",
          title: "Backend Product"
        },
        {
          url: "https://github.com/Anymok/payetonkawa-order-service",
          title: "Backend Order"
        },
        {
          url: "https://github.com/Anymok/payetonkawa-inventory-service",
          title: "Backend Inventory"
        },
        {
          url: "https://github.com/Anymok/payetonkawa-client-service",
          title: "Backend Client"
        }
      ],
      technologies: ["React", "Node.js", "Tailwind CSS", "Google Cloud Platform", "Docker", "Gitlab CI/CD"],
      url: "https://payetonkawa-front.vercel.app/",
      disabled: false,
      type: 'team',
      features: [
        "",
      ],
      architecture: [
        "Application developed with React",
        "Monolithic application with Node.js",
        "Keycloak connection",
        "MySQL database for data persistence",
        "Deployment on Google Cloud Platform"
      ]
    },
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.projects = lang === 'fr' ? this.projectsFr : this.projectsEn;
    });
  }

  getTranslation(key: string): string {
    return this.languageService.translate(key);
  }

  getRepositoryIcon(url: string): string {
    if (url.includes('github.com')) {
      return 'fab fa-github';
    } else if (url.includes('gitlab.com')) {
      return 'fab fa-gitlab';
    } else if (url.includes('bitbucket.org')) {
      return 'fab fa-bitbucket';
    } else {
      return 'fas fa-code-branch';
    }
  }

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
