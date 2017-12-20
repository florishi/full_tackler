import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsInterviewerComponent } from './questions-interviewer.component';

describe('QuestionsInterviewerComponent', () => {
  let component: QuestionsInterviewerComponent;
  let fixture: ComponentFixture<QuestionsInterviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsInterviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
