import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-bolano-seeing',
  templateUrl: './bolano-seeing.component.html',
  styleUrls: ['./bolano-seeing.component.scss'],
  animations: [
    trigger('animationBinding', [
      state('invisible', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      }), 
      {params: {
        transitionDelay: 100
      }}
      
      ),
      transition('invisible => visible', animate(`2000ms {{transitionDelay}}ms ease-in`)),
      transition('visible => invisible', animate(`1000ms {{transitionDelay}}ms ease-in`)),

    ])
  ]
})
export class BolanoSeeingComponent implements OnInit {

  @ViewChild('box') bolanoBox!: ElementRef;

  animationBegun = false; 
  firstTransitionDelay = 2000;
  secondTransitionDelay = 4000;
  thirdTransitionDelay = 6000;
  fourthTransitionDelay = 8000;
  fifthTransitionDelay = 10000

  toggleVisible () {
    this.animationBegun = !this.animationBegun;
  }

  get firstVisibleState() {
    return this.animationBegun ? 'visible' : 'invisible';
  }

  constructor() { }

  ngOnInit(): void {
  }

  begin() {
    this.toggleVisible();
  }


}
