import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Skill } from '../../models/skill';
import { SKILLS } from '../../models/skills-data';

@Injectable()
export class SkillService {

  constructor() { }

  getItems(): Observable<Skill[]> {
    return of(SKILLS);
  }

}
