import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss'],
  animations: [
    trigger('animationBinding', [
      state('initial', style({ 
        color: 'red'
      })),
      state('secondary', style({
        color: 'blue',
        transform: `translateX({{translateValue}})`,
        fontSize: '{{emSize}}'
      }), 
      {
        params: {emSize: '1em', translateValue: '400px'}
      }

      )
    ])
  ]
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerValue = true;
  emSize = '1em';
  translateValue = '450px';

  animateExperiment() {
    this.toggleTriggerValue();
  }

  toggleTriggerValue () {
    this.triggerValue = !this.triggerValue;
  }

  get getTriggerValue() {
    return this.triggerValue ? 'initial' : 'secondary';
  }

}
