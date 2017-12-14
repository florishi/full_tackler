import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiadatesComponent } from './candiadates.component';

describe('CandiadatesComponent', () => {
  let component: CandiadatesComponent;
  let fixture: ComponentFixture<CandiadatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandiadatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandiadatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
