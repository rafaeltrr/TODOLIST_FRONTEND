import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import getAll from './scripts/Cards'
import NoTask from './scripts/NoTasks'

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']  
})
export class ColumnComponent implements OnInit {
  BackLog:any 
  onDevelopment:any;
  interrupted:any;
  test:any;
  production:any;
  backlog:any[] = []
  

  async ngOnInit() {
    this.BackLog = getAll('backlog')
    this.onDevelopment = getAll('onDevelopment')
    this.interrupted = getAll('interrupted')
    this.test = getAll('test')
    this.production = getAll('production')
  }


  async getCardsBacklog() {
    return this.BackLog
  }

  async getCardsOnDevelopment() {
    return this.onDevelopment
  }

  async getCardsInterrupted() {
    return this.interrupted
  }

  async getCardsTest() {
    return this.test
  }

  async getCardsProduction() {
    return this.production
  }

  async noTasks(){
    const result = await NoTask()
    if(result){
      this.BackLog.__zone_symbol__value.push(...result)
    }
     
  }
  
  
}