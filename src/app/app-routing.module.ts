import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  { path: '', component: ListTasksComponent, pathMatch: 'full'},
  { path: 'app-add-task', component: AddTaskComponent  },
  { path: 'app-edit-task', component: EditTaskComponent },
  { path: 'app-view-task', component: ViewTaskComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
