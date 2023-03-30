import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {
   counter_variable:number  =0;

  @Input() step:number =1;

  decease() {
    console.log('aom')
    if (this.counter_variable >0) {
      this.counter_variable = this.counter_variable - this.step;
    }
    
  }
  incease() {

    this.counter_variable = this.counter_variable + this.step;
  }

}
