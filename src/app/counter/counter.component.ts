import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count: number = 0;

  increment(){
    this.count += 1;
    for(var i= 0; i < this.count; i++){
      
    }
  }
  decrement(){
    if(this.count != 0){
      this.count -= 1;
    }
    
  }
  reset(){
    this.count = 0;
  }
}
