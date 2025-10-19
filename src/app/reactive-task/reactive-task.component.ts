import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-task.component.html',
  styleUrls: ['./reactive-task.component.css']
})
export class ReactiveTaskComponent {
  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  addTask() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value.title;
      console.log('Tarea agregada:', task);
      this.taskForm.reset();
    }
  }
}
