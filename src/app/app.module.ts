import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'w-ng5';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgAlertModule } from '@theo4u/ng-alert';

import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskService } from './service/task.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    EditTaskComponent,
    ListTasksComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgAlertModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' 
    })
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
  exports:[
    ListTasksComponent,
    AddTaskComponent,
    EditTaskComponent
  ]
})
export class AppModule { }
