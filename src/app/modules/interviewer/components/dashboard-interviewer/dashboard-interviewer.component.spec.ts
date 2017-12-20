import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInterviewerComponent } from './dashboard-interviewer.component';

describe('DashboardInterviewerComponent', () => {
  let component: DashboardInterviewerComponent;
  let fixture: ComponentFixture<DashboardInterviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInterviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
