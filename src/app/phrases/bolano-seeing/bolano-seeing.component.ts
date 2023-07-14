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
        transitionDelay: 2000
      }}
      
      ),
      transition('invisible => visible', animate(`{{transitionDelay}}ms 2000ms ease-in`)),

    ])
  ]
})
export class BolanoSeeingComponent implements OnInit {

  @ViewChild('box') bolanoBox!: ElementRef;

  firstVisible = false; 
  transitionDelay = 2000;

  toggleFirstVisible () {
    this.firstVisible = !this.firstVisible;
  }

  get firstVisibleState() {
    return this.firstVisible ? 'visible' : 'invisible';
  }

  constructor() { }

  ngOnInit(): void {
  }

  begin() {
    this.toggleFirstVisible();
  }


}
