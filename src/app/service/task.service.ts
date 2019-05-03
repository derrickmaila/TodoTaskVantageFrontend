import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from './../model/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8080/api/v1/";

  getAllTasks(){
      return this.http.get<TaskModel[]>(this.baseurl + 'tasks');
  }

  getTaskById(id: string){
    return this.http.get<TaskModel>(this.baseurl + 'tasks' + '/' + id);
  }

  addTask(task: TaskModel){
    return this.http.post(this.baseurl + 'tasks', task);
  }

  deleteTask(id: string){
    return this.http.delete(this.baseurl + 'tasks' + '/' + id);
  }

  updateTask(task: TaskModel){
    return this.http.put(this.baseurl + 'tasks' + '/' + task.id,task);
  }
}
