import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../service/task.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TaskModel } from './../model/task-model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  product: TaskModel;
  viewForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    let taskId = localStorage.getItem("taskId");
    if(!taskId){
      alert("Error : task Id is empty");
      this.router.navigate(['']);
      return;
    }

    this.viewForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.taskService.getTaskById(taskId).subscribe(data=>{
      console.log(data);
      this.viewForm.patchValue(data); 
    });
    
  }

  // get the form short name to access the form fields
  get f() { return this.viewForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.viewForm.valid){
      this.taskService.updateTask(this.viewForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
    
  }

}
