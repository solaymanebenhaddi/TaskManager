import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import{NewListComponent} from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UpdateListComponent } from './pages/update-list/update-list.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';


//a route configuration for the Router service
const routes: Routes = [
  {path:'',redirectTo:"lists",pathMatch:"full"},
  {path:'new-list',component:NewListComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'Update-List/:listId',component:UpdateListComponent},
  {path:'lists/:listId/new-task',component:NewTaskComponent},
  {path:"lists",component:TaskViewComponent},
  {path:"lists/:listId",component:TaskViewComponent},
  {path:'lists/:listId/Update-task/:taskId',component:UpdateTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
