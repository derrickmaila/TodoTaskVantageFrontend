import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../service/task.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private taskService: TaskService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
  
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      duedate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.taskService.addTask(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}