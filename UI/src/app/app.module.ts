import { RouterModule } from '@angular/router';
import { ContactComponent } from './../component/contact/contact.component';
import { ResumeComponent } from './../component/resume/resume.component';
import { SkillsComponent } from './../component/skills/skills.component';
import { AboutComponent } from './../component/about/about.component';
import { SidebarComponent } from './../component/sidebar/sidebar.component';
import { HomeComponent } from './../component/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
