import { Component,Input} from '@angular/core';


//Task Header component contains the title
@Component({
  selector: 'task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent {
  @Input() title:string='New';
  textColor:any={
    "New":'red',
    "In Progress":"#d4ba00",
    "Completed":"green"
  }
}
