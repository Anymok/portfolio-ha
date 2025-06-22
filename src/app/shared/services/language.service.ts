import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('fr');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: { [key: string]: any } = {
    fr: {
      header: {
        home: 'Accueil',
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contact'
      },
      about: {
        title: 'À propos',
        subtitle: 'Développeur',
        subsubtitle: 'Full Stack',
        description: 'Développeur passionné par la création d\'applications web modernes et performantes. Je combine créativité et expertise technique pour créer des solutions innovantes.',
        experience: 'Années d\'expérience',
        projects: 'Projets réalisés',
        technologies: 'Technologies maîtrisées',
        downloadCV: 'Télécharger CV',
        viewProjects: 'Voir mes projets'
      },
      skills: {
        title: 'Compétences',
        subtitle: 'Mes compétences techniques',
        description: 'J\'ai classé mes compétences en deux catégories : professionnelles et personnelles. Les compétences professionnelles correspondent à celles que j\'utilise en entreprise depuis 3 ans, tandis que les compétences personnelles concernent les projets personnels que je réalise.',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de données',
        devops: 'DevOps',
        tools: 'Outils',
        professional: 'Professionnelles',
        personal: 'Personnelles'
      },
      projects: {
        title: 'Projets',
        subtitle: 'Mes réalisations',
        description: 'Découvrez mes projets personnels, développés seul ou en équipe. Chaque projet représente une montée en compétences sur différentes technologies.',
        viewProject: 'Voir le projet',
        viewCode: 'Voir le code',
        technologies: 'Technologies utilisées',
        projectDescription: 'Description',
        features: 'Fonctionnalités',
        architecture: 'Architecture',
        solo: 'Solo',
        team: 'Team',
        learnMore: 'En savoir plus',
        repository: 'Repository',
        demo: 'Demo'
      },
      contact: {
        title: 'Contactez-moi',
        subtitle: 'Envie de discuter ?',
        description: 'Je suis à l\'écoute de toute opportunité professionnelle ou collaboration enrichissante. N\'hésitez pas à me contacter via LinkedIn.',
        name: 'Nom',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer',
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'votre.email@exemple.com',
        subjectPlaceholder: 'Sujet de votre message',
        messagePlaceholder: 'Votre message...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi du message.',
        required: 'Ce champ est requis',
        invalidEmail: 'Email invalide'
      },
      footer: {
        rights: 'Tous droits réservés',
        madeWith: 'Fait avec',
        by: 'par',
        social: 'Contact / Réseaux sociaux',
        navigation: 'Navigation'
      },
      language: {
        french: 'Français',
        english: 'English'
      },
      common: {
        loading: 'Chargement...',
        error: 'Erreur',
        success: 'Succès',
        cancel: 'Annuler',
        save: 'Sauvegarder',
        edit: 'Modifier',
        delete: 'Supprimer',
        close: 'Fermer',
        open: 'Ouvrir',
        next: 'Suivant',
        previous: 'Précédent',
        submit: 'Soumettre',
        reset: 'Réinitialiser'
      }
    },
    en: {
      header: {
        home: 'Home',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      about: {
        title: 'About',
        subtitle: 'Developer',
        subsubtitle: 'Full Stack',
        description: 'Passionate developer creating modern and performant web applications. I combine creativity and technical expertise to create innovative solutions.',
        experience: 'Years of experience',
        projects: 'Projects completed',
        technologies: 'Technologies mastered',
        downloadCV: 'Download CV',
        viewProjects: 'View my projects'
      },
      skills: {
        title: 'Skills',
        subtitle: 'My technical skills',
        description: 'I have classified my skills into two categories: professional and personal. Professional skills correspond to those I use in business for 3 years, while personal skills concern personal projects I carry out.',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        devops: 'DevOps',
        tools: 'Tools',
        professional: 'Professional',
        personal: 'Personal'
      },
      projects: {
        title: 'Projects',
        subtitle: 'My achievements',
        description: 'Discover my personal projects, developed alone or in team. Each project represents a skills upgrade on different technologies.',
        viewProject: 'View project',
        viewCode: 'View code',
        technologies: 'Technologies used',
        projectDescription: 'Description',
        features: 'Features',
        architecture: 'Architecture',
        solo: 'Solo',
        team: 'Team',
        learnMore: 'Learn more',
        repository: 'Repository',
        demo: 'Demo'
      },
      contact: {
        title: 'Contact me',
        subtitle: 'Want to discuss?',
        description: 'I am open to any professional opportunity or enriching collaboration. Don\'t hesitate to contact me via LinkedIn.',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your.email@example.com',
        subjectPlaceholder: 'Subject of your message',
        messagePlaceholder: 'Your message...',
        success: 'Message sent successfully!',
        error: 'Error sending message.',
        required: 'This field is required',
        invalidEmail: 'Invalid email'
      },
      footer: {
        rights: 'All rights reserved',
        madeWith: 'Made with',
        by: 'by',
        social: 'Contact / Social networks',
        navigation: 'Navigation'
      },
      language: {
        french: 'Français',
        english: 'English'
      },
      common: {
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        cancel: 'Cancel',
        save: 'Save',
        edit: 'Edit',
        delete: 'Delete',
        close: 'Close',
        open: 'Open',
        next: 'Next',
        previous: 'Previous',
        submit: 'Submit',
        reset: 'Reset'
      }
    }
  };

  constructor() {
    // Initialiser avec la langue stockée dans localStorage ou français par défaut
    const savedLanguage = localStorage.getItem('language') || 'fr';
    this.setLanguage(savedLanguage);
  }

  setLanguage(lang: string): void {
    this.currentLanguageSubject.next(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    this.setLanguage(newLang);
  }

  translate(key: string): string {
    const lang = this.getCurrentLanguage();
    const keys = key.split('.');
    let value = this.translations[lang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Retourner la clé si la traduction n'est pas trouvée
      }
    }
    
    return value as string;
  }
} 