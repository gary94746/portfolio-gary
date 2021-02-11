import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ContactMeService } from './contact-me.service';
import { BriefComponent } from './brief/brief.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProjectsComponent,
    ContactMeComponent,
    SkillsComponent,
    WorkHistoryComponent,
    BriefComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContactMeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
