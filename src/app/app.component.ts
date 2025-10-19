import { Component } from "@angular/core";
import { TaskListComponent } from "./task-list/task-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddTaskComponent } from "./add-task/add-task.component";
import { HttpClientModule } from "@angular/common/http";


  @Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, AddTaskComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Mi lista de Tareas';
  tasks: string[] = [];

  onTaskAdded(task: string) {
    this.tasks.push(task);
  }

  get taskCount(): number {
    return this.tasks.length;
  }
}
