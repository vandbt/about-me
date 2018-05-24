import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducactionComponent } from "./educaction/educaction.component";
import { SkillsComponent } from "./skills/skills.component";
import { InterestsComponent } from "./interests/interests.component";
import { AwardsComponent } from "./awards/awards.component";
import { ResumeNavComponent } from "./resume-nav/resume-nav.component";
import { DefaultComponent } from './default/default.component';
import { SkillService } from './services/skill.service';
import { KnowledgeService } from './services/knowledge.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AboutComponent,
    ExperienceComponent,
    EducactionComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    ResumeNavComponent,
    DefaultComponent
  ],
  exports: [
    DefaultComponent
  ],
  providers: [SkillService, KnowledgeService]
})
export class ResumeModule {}
