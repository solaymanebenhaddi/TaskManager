import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(private TaskService : TaskService,private router : Router) { }

  ngOnInit(): void {
  }
  // create new list function that call  task service to create new list.
CreatNewList(title:string){
  
    this.TaskService.CreatList(title).subscribe((list : any ) => {
      console.log(list);
      this.router.navigate(['/lists',list._id]);

    })
  

}
}
