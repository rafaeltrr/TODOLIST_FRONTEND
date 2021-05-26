import { Component, EventEmitter, Output } from '@angular/core';
import Register  from './scripts/register'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
  @Output() onSubmit = new EventEmitter();

  name: string = "";
  email:string = "";
  description:string = "";
  msg:string = "";
  suggest:string = ""
  
  async register(){
    const result = await Register(this.name,this.email,this.description)
    this.msg = result.msg
    this.suggest = result.suggest 
    this.onSubmit.emit(result.cards)
  }
  



}