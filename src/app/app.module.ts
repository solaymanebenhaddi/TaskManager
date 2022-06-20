import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginComponent } from './pages/login/login.component';
import { InterseptorServeService } from './Services/interseptor-serve.service';
import { SignupComponent } from './pages/signup/signup.component';
import { UpdateListComponent } from './pages/update-list/update-list.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    LoginComponent,
    SignupComponent,
    UpdateListComponent,
    UpdateTaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [

    {provide : HTTP_INTERCEPTORS , useClass : InterseptorServeService , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
