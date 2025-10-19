import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask: string = '';
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim()) {
      this.taskAdded.emit(this.newTask.trim());
      this.newTask = '';
    }
  }
}
