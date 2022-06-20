import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private Webrequest : WebRequestService) { }

  // we will find her function CRUD of the app.

  CreatList(title: string) {
   return this.Webrequest.Poster('lists', {title});
  }
  UpdateList(id : string,title: string) {
    return this.Webrequest.Puter(`lists/${id}`, {title});
   }
  GetList(){
    return this.Webrequest.Geter('lists');
  }
  GetTasks(listId: string){
    return this.Webrequest.Geter(`lists/${listId}/tasks`);
  }
  
  CreatTask(title:string,desc:string,type:string,date:string,listId:string) {
    return this.Webrequest.Poster(`lists/${listId}/tasks`, {title,desc,type,date});
   }
   IsComplete(task : Task,listId:string){
      return this.Webrequest.Puter(`lists/${listId}/tasks/${task._id}`, {completed:!task.completed});
   }
   DeletList(listId:string){
    return this.Webrequest.Deleter(`lists/${listId}`);
   }
   DeletTask(taskId:string,listId:string){
    return this.Webrequest.Deleter(`lists/${listId}/tasks/${taskId}`);
   
   }
   UpdateTask(taskId:string,listId:string,title:string,desc:string,type:string,date:string){
    return this.Webrequest.Puter(`lists/${listId}/tasks/${taskId}`,{title,desc,type,date});
   }
}
