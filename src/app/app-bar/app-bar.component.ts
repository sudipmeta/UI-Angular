import { Component, OnInit } from '@angular/core';
import { TaskInputDialogService } from '../services/task-input-dialog.service';
import { Task } from '../Types/task.type';


//this is the topbar component which uses the dialogService to open the dialog
@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  //creating the object to of dialog service
  constructor(private taskInputDialogService:TaskInputDialogService) { }

  ngOnInit(): void {
  }
  addNewTask(show:boolean){
    let task:Task={
      title:"",
      description:"",
      completionDate:null,
      creationDate:new Date().toString(),
      priority:"",
      status:'new'
}

    this.taskInputDialogService.toggleDialog(task); //Dialog toggling
  }

}
