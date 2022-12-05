import { Component, OnInit } from '@angular/core';
import {TaskManagerService} from '../services/task-mangaer.service';
import {Task} from '../Types/task.type'

//The Task Interface


//This class uses the taskManager service to get the Task and display all the Tasks

@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {
  Tasks:Array<Task>=[]; //Contains all the Tasks
  status:Array<string>=['new','inProgress','completed']
  
  //creating objects of the all the services
  constructor(private taskManagerService:TaskManagerService) {
      this.Tasks = taskManagerService.getTask(); //getting the task from service
   }

  ngOnInit(): void {
  }

}
