import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from "./components/header/header.component";
import { ProjectComponent } from "./components/project/project.component";
import { SkillComponent } from "./components/skill/skill.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LanguageToggleComponent } from "./components/language-toggle/language-toggle.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AboutComponent,
    HeaderComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent,
    FooterComponent,
    LanguageToggleComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AboutComponent,
    HeaderComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent,
    FooterComponent,
    LanguageToggleComponent,
  ]
})
export class AppModule { }
