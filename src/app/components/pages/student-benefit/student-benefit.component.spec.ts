import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBenefitComponent } from './student-benefit.component';

describe('StudentBenefitComponent', () => {
  let component: StudentBenefitComponent;
  let fixture: ComponentFixture<StudentBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBenefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
