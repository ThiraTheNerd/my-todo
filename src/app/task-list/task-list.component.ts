import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import {Task} from '../task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() task: Task;
  @Output() isComplete  = new EventEmitter<boolean>();

  completeTask(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit() {
  }

}
