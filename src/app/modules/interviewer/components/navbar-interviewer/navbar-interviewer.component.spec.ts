import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInterviewerComponent } from './navbar-interviewer.component';

describe('NavbarInterviewerComponent', () => {
  let component: NavbarInterviewerComponent;
  let fixture: ComponentFixture<NavbarInterviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarInterviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
