import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

 
  constructor(private route : ActivatedRoute, private taskService : TaskService,private router : Router) { }
  private taskId : string='';
  private listId : string='';
  // get task id task and id list from url on init
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{

      this.taskId = params['taskId'];
      this.listId = params['listId'];
     
    })

    
   
  }
  // update task function that call  task service to update task.
  OnUpdateTask(title:string,desc:string,type:string,date:string){
    this.taskService.UpdateTask(this.taskId,this.listId,title,desc,type,date).subscribe(()=>{
      this.router.navigate(['/lists',this.listId]);
    })
  }

}
