import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTask } from './reactive-task';

describe('ReactiveTask', () => {
  let component: ReactiveTask;
  let fixture: ComponentFixture<ReactiveTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
