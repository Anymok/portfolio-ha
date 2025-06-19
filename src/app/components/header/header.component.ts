import { Component } from '@angular/core';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('navAnimation', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('linkHover', [
      transition(':enter', [
        style({ transform: 'scale(1)' }),
        animate('0.2s ease-out', style({ transform: 'scale(1.05)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  // Vous pouvez ajouter ici des propriétés ou des méthodes si nécessaire
}
