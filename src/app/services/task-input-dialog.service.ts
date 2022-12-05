import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs';  
import { Task } from '../Types/task.type';
  

//A service helps to perform operation related to dilaog box
@Injectable() export class TaskInputDialogService {
    private subject = new Subject<any>();  
    show:boolean=false;
    //@param:task - task if any
    //@param:show - true or false
    //@param:index - index of the task if any
    toggleDialog=(task?:Task)=> {
        this.show = !this.show  
        this.subject.next({
            task,
            "show":this.show
        });  
    }  
 
  //regestir the dialog which invokes on click
    registerDialog(): Observable<any> {  
        return this.subject.asObservable();  
    }  
}  