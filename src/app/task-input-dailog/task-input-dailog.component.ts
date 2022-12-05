import { Component, OnInit } from '@angular/core';  
import { TaskInputDialogService } from '../services/task-input-dialog.service';  
import {TaskManagerService} from '../services/task-mangaer.service'
import { Task } from '../Types/task.type';


//Diaog component
@Component({  
    selector: 'app-confirm-dialog',  
    templateUrl: 'task-input-dailog.component.html',  
    styleUrls: ['task-input-dailog.component.css']  
})  
  
export class TaskInputDailogComponent implements OnInit {  
    show: boolean = false;  
    error:boolean = false;
    task!:Task
    prevState!:Task;
    //Intializing services
    constructor(  
        private TaskInputDialogService: TaskInputDialogService,
        private taskManagerService:TaskManagerService  
    ) { }  
  
    ngOnInit(): any {  
        this.TaskInputDialogService.registerDialog().subscribe(({show,task}) => { 
            this.show = show;  
            this.task = task;
            if(task)
                this.prevState ={...this.task}
        });  
    }
    toggleDialog=()=>{
        this.task.title = this.prevState.title;
        this.task.description = this.prevState.description;
        this.task.completionDate = this.prevState.completionDate;
        this.task.creationDate = this.prevState.creationDate;
        this.task.priority = this.prevState.priority;
        this.task.status = this.prevState.status;
        this.TaskInputDialogService.toggleDialog();
    }

    //changes the style of input if find any error
    handleError=(id:string,value:string):string=>{
        let el = document.getElementById(id);
        if(el){

           if(value==''){
            el.classList.add('is-invalid');
            return '';
           } 
           else el.classList.remove('is-invalid');
           return value;
        }
        return '';
    }


    //validate the inputs
    validate=(value:string,id:string)=>{
        if(id == 'title'){
            this.task.title = this.handleError(id,value);
        }
        else if(id == 'description'){
            this.task.description = this.handleError(id,value);
        }
        else if(id == 'priority'){
            this.task.priority = this.handleError(id,value);
        }
        else if(id == 'status'){
            this.task.status = this.handleError(id,value);
        }
    }

    //Add Or update the task
    saveTask(){
        if(this.handleError('title',this.task.title) !=='' 
        && this.handleError('description',this.task.description) !== ''
        && this.handleError('priority',this.task.priority) !== ''
        && this.handleError('status',this.task.status)!==''){
        if(this.taskManagerService.isNew(this.task))
            this.taskManagerService.addTask(this.task);
        this.TaskInputDialogService.toggleDialog();
        }
    }
        }