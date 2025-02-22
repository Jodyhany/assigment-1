import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ErrorComponent } from './error/error.component';
import { workcomponents } from './work/work.component';
import { ExperienceComponent } from './experoence/Experience.component';
import { FormsModule } from '@angular/forms';
import { AppsComponent } from './apps/apps.component';
import { SoftwareComponent } from './software/software.component';
import { GraphicdesignComponent } from './graphicdesign/graphicdesign.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    workcomponents,
    ErrorComponent,
    AppsComponent,
    SoftwareComponent,
    GraphicdesignComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
