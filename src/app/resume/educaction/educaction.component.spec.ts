import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducactionComponent } from './educaction.component';

describe('EducactionComponent', () => {
  let component: EducactionComponent;
  let fixture: ComponentFixture<EducactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
