import { Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { DeletedTasksComponent } from './deleted-tasks/deleted-tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
  { path: 'agregar', component: AddTaskComponent },
  { path: 'editar/:id', component: EditTaskComponent },
  { path: 'completadas', component: CompletedTasksComponent },
  { path: 'eliminadas', component: DeletedTasksComponent },
  { path: 'detalle/:id', component: TaskDetailComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  }
];
