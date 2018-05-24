import { Component, OnInit } from '@angular/core';

import { Skill, Knowledge } from '../../models/skill';
import { SKILLS } from '../../models/skills-data';
import { KNOWLEDGES } from '../../models/knowledges-data';
import { SkillService } from '../services/skill.service';
import { KnowledgeService } from '../services/knowledge.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  knowledges: Knowledge[];

  getSkills(): void {
    this.skillService.getItems()
      .subscribe(skills => this.skills = skills);
  }
  getKnowledges(): void {
    this.knowledgeService.getItems()
      .subscribe(knowledges => this.knowledges = knowledges);
  }


  constructor(private skillService: SkillService, private knowledgeService: KnowledgeService) { }

  ngOnInit() {
    this.getSkills();
    this.getKnowledges();
  }

}
