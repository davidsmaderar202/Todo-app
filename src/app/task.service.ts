import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';
  private tasksSubject = new BehaviorSubject<string[]>(this.getTasks());
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTasks(): string[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  addTask(task: string): void {
    const updated = [...this.getTasks(), task];
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
    this.tasksSubject.next(updated);
  }

  deleteTask(index: number): void {
    const updated = this.getTasks();
    updated.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
    this.tasksSubject.next(updated);
  }

  clearTasks(): void {
    localStorage.removeItem(this.storageKey);
    this.tasksSubject.next([]);
  }

  getExternalTasks(): Observable<string[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map(tasks => tasks.slice(0, 10).map(t => t.title)),
      filter(titles => titles.length > 0),
      catchError(error => {
        console.error('Error al obtener tareas externas', error);
        return of([]);
      })
    );
  }
}
