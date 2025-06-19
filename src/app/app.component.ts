import { Component, OnInit } from '@angular/core';
import { AppModule } from './app.module';
import { IntersectionService } from './shared/services/intersection.service';

@Component({
  selector: 'app-root',
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected title = 'portfolio-ha';

  constructor(private intersectionService: IntersectionService) {}

  ngOnInit() {
    // Observer les sections pour les animations
    setTimeout(() => {
      this.intersectionService.observeSections();
    }, 100);
  }
}
