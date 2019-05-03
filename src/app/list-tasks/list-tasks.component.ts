import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TaskModel } from './../model/task-model';
import { TaskService } from '../service/task.service';
import { NgAlertService, IMessage, MessageType, CloseType  } from '@theo4u/ng-alert';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  
  tasks: TaskModel[];
  display = 'none';
  title: string;
  category: string;
  description: string;
  duedate:Date;
  status: string;
  popoverTitle:string = 'Delete Task';
  popoverMessage:string = 'Are you sure you want to delete this task?';
  confirmClicked:boolean = false;
  cancelClicked:boolean = false;

  constructor(private taskService: TaskService, private router: Router,private _ngAlert: NgAlertService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(): void{
    this.taskService.getAllTasks().subscribe(data=>{
        this.tasks = data;
    });
  }
  
  addTask(): void{
    this.router.navigate(['app-add-task']);
  }

  viewTask(taskModel: TaskModel){
      this.display ='block';   
      this.taskService.getTaskById(taskModel.id).subscribe(data=>{
         console.log(data);
         this.title = data.title;
         this.category=data.category;
         this.description = data.description;
         this.duedate = data.duedate;
         this.status = data.status;
      });
      
  }
  
  deleteTask(task: TaskModel){
    this.taskService.deleteTask(task.id).subscribe(data=>{
       console.log(data);
       this.getAllTasks();
    });
  }
  
  updateTask(task: TaskModel){
    localStorage.removeItem("taskId");
    localStorage.setItem("taskId", task.id);
    this.router.navigate(['app-edit-task']);
  }

  onCloseHandled(){
    this.display ='none'; 

 }

}
