import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: false,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  selectedSkillType: 'professional' | 'personal' = 'professional';

  professionalSkills = [
    { name: 'Angular', icon: '/icons/angular.png' },
    { name: 'Django', icon: '/icons/django.svg' },
    { name: 'Google Cloud Platform', icon: '/icons/gcp.png' },
    { name: 'HTML', icon: '/icons/html5.png' },
    { name: 'CSS', icon: '/icons/css3.png' },
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'Python', icon: '/icons/python.webp' },
    { name: 'MySQL', icon: '/icons/mysql.png' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
    { name: 'Jenkins', icon: '/icons/jenkins.png' },
    { name: 'Bitbucket', icon: '/icons/bitbucket.webp' },

  ];

  personalSkills = [
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Ionic', icon: '/icons/ionic.webp' },
    { name: 'Spring Boot', icon: '/icons/springboot.png' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.png' },
    { name: 'GitHub Actions', icon: '/icons/github.png' },
    { name: 'GitLab CI/CD', icon: '/icons/gitlab.png' },
    { name: 'Docker', icon: '/icons/docker.webp' },
  ];

  switchSkillType(type: 'professional' | 'personal') {
    this.selectedSkillType = type;
  }

  get currentSkills() {
    return this.selectedSkillType === 'professional' ? this.professionalSkills : this.personalSkills;
  }
}
