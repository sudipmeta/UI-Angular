import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Types/task.type';
import {TaskInputDialogService} from '../services/task-input-dialog.service'
import { TaskManagerService } from '../services/task-mangaer.service';

//Task card component taske the Task as input and display
//It uses the TaskDeleteOrUpdateService to send the information about the task on which performation is going to perfom
@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})

export class TaskCardComponent implements OnInit {

  @Input() task:any;
  @Input() index!:number;

  //priority color
  priorityColor:any={
    0:"#afebeb",
    1:"#ffc2c2",
    2:"#a6ceff"
  }


  constructor(private _dialogService:TaskInputDialogService,
    private _taskManagerService:TaskManagerService ) { }

  editTask=(task:Task)=>{
    this._dialogService.toggleDialog(task);
    }

deleteTask=(index:number)=>{
  this._taskManagerService.delete(index);
}

  ngOnInit(): void {
  }

}
