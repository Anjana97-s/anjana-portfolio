import { ContactComponent } from './../component/contact/contact.component';
import { SkillsComponent } from './../component/skills/skills.component';
import { ResumeComponent } from './../component/resume/resume.component';
import { AboutComponent } from './../component/about/about.component';
import { SidebarComponent } from './../component/sidebar/sidebar.component';
import { HomeComponent } from './../component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"about",component:AboutComponent},
  {path:"resume",component:ResumeComponent},
  {path:"skills",component:SkillsComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
