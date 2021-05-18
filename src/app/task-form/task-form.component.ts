import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Task} from '../task'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  tasks : Task[] = [];

  addTask(title: HTMLInputElement, category: HTMLInputElement, deadline: HTMLInputElement): boolean{
    console.log(`${title.value}
    ${category.value}
    ${deadline.value}`);

    this.tasks.push(new Task(title.value, category.value, deadline.valueAsDate));

    title.value = "";
    category.value="";
    deadline.value=""
    return false;
  }

  taskComplete(isComplete, index){
    if(isComplete){
      this.tasks.splice(index,1)
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
