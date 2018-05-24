import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Knowledge } from '../../models/skill';
import { KNOWLEDGES } from '../../models/knowledges-data';

@Injectable()
export class KnowledgeService {

  constructor() { }

  getItems(): Observable<Knowledge[]> {
    return of(KNOWLEDGES);
  }
}
