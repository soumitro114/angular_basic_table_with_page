import { Component, OnInit } from '@angular/core';
// import { gen_taskk } from 'src/mock-tasks';
// import { Tasks } from 'src/mock-tasks';
import { Items } from 'src/supervisor_list';
import { Task } from 'src/task';

@Component({
  selector: 'app-task-generator',
  templateUrl: './task-generator.component.html',
  styleUrls: ['./task-generator.component.scss']
})

export class TaskGeneratorComponent implements OnInit {

  public Tasks : Task[] = []
  count : number = 0
  clicked : boolean = false
  
  constructor() { }
  
  ngOnInit(): void {
  }

  next()
  {
    this.count++
  }
  
  prev()
  {
    this.count--
    if(this.count === -1)
      this.count = 4
  }

task_gen(){
  
  this.clicked =true

  for(let x:number = 0; x< 50 ; x++)
  {
      
      this.Tasks[x] = {
      name : `name${x}`,
      id : 1604000 + x,
      section : 'B',
      supervisor : Items[Math.floor(Math.random() * Items.length)],
      cgpa : Math.floor(Math.random() * (300 - 100) + 200) / 100}
  }
}
rese()
{
  this.clicked = false
  this.Tasks = []
}




}
