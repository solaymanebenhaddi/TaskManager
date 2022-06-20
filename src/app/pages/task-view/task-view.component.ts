import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  Lists : any;
  Tasks : any;
  listId : string='';
  constructor(private Taskservice: TaskService,private route : ActivatedRoute,private router:Router) { }

  // on the loading of the page get the list id from url and get the list and tasks from the server.
  // but if there is no list id in the url redirect to the lists page. without loading tasks.
  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params: Params)=>{

      this.listId = params['listId'];
      console.log("id list : "+this.listId);
     (params['listId']? this.Taskservice.GetTasks(params['listId'])
     .subscribe(tasks => {
      this.Tasks = tasks;console.log("tasks : "+tasks);
    }):null)
    })
    this.Taskservice.GetList().subscribe((lists)=>{
     this.Lists=lists;;
    })
  }

  // create new task function that call  task service to update the state of a Task if Completed or not.
  OnclickTask(task : Task){
     this.Taskservice.IsComplete(task,this.listId)
     .subscribe(()=>{
      console.log("task is completed");
      task.completed = !task.completed;
     });
  }
  // create new task function that call  task service to delete list.
  OnDeleteList(){
    this.Taskservice.DeletList(this.listId)
    .subscribe(()=>{
      console.log("list is deleted");
      this.router.navigate(['/lists']);
    })}
// create new task function that call  task service to delete task.
    OnDeletTask(idtask:string){
      this.Taskservice.DeletTask(idtask,this.listId)
    .subscribe(()=>{
      this.Tasks=this.Tasks.filter((task:any)=>{task._id!=idtask})
      console.log("list is deleted");
      this.router.navigate(['/lists']);
    })
    }
  
}
