import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {

  constructor(private route : ActivatedRoute, private taskService : TaskService,private router : Router) { }
  private listId : string='';
  // get list id from url on init
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{

      this.listId = params['listId'];
     
    })

    
   
  }
  // update list function that call  task service to update list.
  OnUpdateList(title:string){
    this.taskService.UpdateList(this.listId,title).subscribe(()=>{
      this.router.navigate(['/lists',this.listId]);
    })
  }

}
