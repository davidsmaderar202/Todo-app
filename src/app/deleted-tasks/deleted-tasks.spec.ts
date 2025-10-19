import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedTasks } from './deleted-tasks.component';

describe('DeletedTasks', () => {
  let component: DeletedTasks;
  let fixture: ComponentFixture<DeletedTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletedTasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
