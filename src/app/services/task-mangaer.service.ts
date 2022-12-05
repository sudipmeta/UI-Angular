import { Injectable } from '@angular/core';  
import { Task } from '../Types/task.type';
  

//A task Manager services
@Injectable() export class TaskManagerService {

    Tasks:Task[]=[]; 

    //return all the Task
    getTask=():Task[]=>{
        return this.Tasks;
    }

    //Add Task to
    //@param- task
    addTask=(task:Task)=>{
        this.Tasks.push(task)
    }

    //return true if the given task is new or false
    isNew(task: Task):boolean {
        return !this.Tasks.includes(task);
    }

    //delete the task of from the given index
    delete(index: number) {
       this.Tasks.splice(index,1);
      }
  
}  