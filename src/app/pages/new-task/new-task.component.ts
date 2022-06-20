import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
   private ListId:string ='';
  
   constructor(private TaskService : TaskService,private route : ActivatedRoute,private Router : Router) { }

  // get list id from url
  ngOnInit(): void {
    this.route.params.subscribe((params : Params) =>{
      this.ListId = params['listId'];
      
  })
  }
  // create new task function that call  task service to create new task.
  CreatNewTask(title:string,desc:string,type:string,date:string){
    this.TaskService.CreatTask(title,desc,type,date,this.ListId).subscribe((task : any ) => {
      this.Router.navigate(['../'],{relativeTo:this.route});
    })
  }
}
