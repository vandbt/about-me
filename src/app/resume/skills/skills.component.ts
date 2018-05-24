import { Component, OnInit } from '@angular/core';

import { Skill } from '../../models/skill';
import { SKILLS } from '../../models/skills-data';
import { KNOWLEDGES } from '../../models/knowledges-data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = SKILLS;
  knowledges = KNOWLEDGES;

  constructor() { }

  ngOnInit() {
  }

}
