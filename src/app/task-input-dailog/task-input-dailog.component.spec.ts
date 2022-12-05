import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputDailogComponent } from './task-input-dailog.component';

describe('TaskInputDailogComponent', () => {
  let component: TaskInputDailogComponent;
  let fixture: ComponentFixture<TaskInputDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
