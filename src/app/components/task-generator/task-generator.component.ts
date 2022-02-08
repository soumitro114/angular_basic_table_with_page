import { Component, OnInit } from '@angular/core';
import { Items } from 'src/supervisor_list';
import { Task } from 'src/task';

@Component({
  selector: 'app-task-generator',
  templateUrl: './task-generator.component.html',
  styleUrls: ['./task-generator.component.scss']
})

export class TaskGeneratorComponent implements OnInit {

  public Tasks : Task[] = []
  public TaskDisplay : Task[] = []
  count : number = 0
  clicked : boolean = false
  
  constructor() { }
  
  ngOnInit(): void {
  }

  next()
  {
    this.count++
    this.display()
  }
  
  prev()
  {
    this.count--
    if(this.count === -1)
      this.count = 4
    this.display()
  }

task_gen(){
  
  this.clicked = true

  for(let x:number = 0; x< 50 ; x++)
  {
      
      this.Tasks[x] = {
      name : `name${x}`,
      id : 1604000 + x,
      section : 'B',
      supervisor : Items[Math.floor(Math.random() * Items.length)],
      cgpa : Math.floor(Math.random() * (300 - 100) + 200) / 100}
  }
  this.display()

}
rese()
{
  this.clicked = false
  this.Tasks = []
}

display(){
  var sliceNumber:number = (this.count % 5) * 10
  this.TaskDisplay = this.Tasks.slice(sliceNumber,sliceNumber+10)
}
}