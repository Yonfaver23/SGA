import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentValidateComponent } from './student-validate.component';

describe('StudentValidateComponent', () => {
  let component: StudentValidateComponent;
  let fixture: ComponentFixture<StudentValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
