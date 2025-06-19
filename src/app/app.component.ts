import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppModule } from './app.module';
import { IntersectionService } from './shared/services/intersection.service';

@Component({
  selector: 'app-root',
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  protected title = 'portfolio-ha';
  private initTimeout: any;

  constructor(private intersectionService: IntersectionService) {}

  ngOnInit() {
    // Observer les sections pour les animations avec un délai réduit
    this.initTimeout = setTimeout(() => {
      this.intersectionService.observeSections();
    }, 50);
  }

  ngOnDestroy() {
    if (this.initTimeout) {
      clearTimeout(this.initTimeout);
    }
  }
}
