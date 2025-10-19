import { Component } from "@angular/core";
import { TaskListComponent } from "./task-list/task-list.component";
import { FormsModule } from "@angular/forms";
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = [];

  onTaskAdded(task: string) {
    this.tasks.push(task);
  }
}
