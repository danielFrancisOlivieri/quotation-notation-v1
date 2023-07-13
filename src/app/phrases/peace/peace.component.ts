import { Component, ElementRef, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'peace',
  templateUrl: './peace.component.html',
  styleUrls: ['./peace.component.scss'],
  animations: [
    trigger('animationTrigger', [
      state('disappear1', style({})),
      state('disappear2', style({ 
      opacity: 0
    })),

      state('peace1', style({})),
      state('peace2', style({
          transform: 'translateX(-338%)'
      })),
      state('period1', style({})),
      state('period2', style({
          transform: 'translateX(-1540%)'
      })),

      transition('disappear1 => disappear2', animate('1000ms ease-in')),
      transition('disappear2 => disappear1', animate('1000ms ease-in')),
      transition('peace1 => peace2', animate('1000ms ease-in')),
      transition('peace2 => peace1', animate('1000ms ease-in')),
      transition('period1 => period2', animate('1000ms ease-in')),
      transition('period2 => period1', animate('1000ms ease-in')),
    ])
  ]
})
export class PeaceComponent {

  disappear = true;
  peaceMove = false; 
  noOrThe = 'no';
  peaceText = 'peace';
  thereLocation : any;

  @ViewChild('there') there!: ElementRef;

  // there
  makeDisappear() {
    this.disappear = !this.disappear;
  }

  animatePeace() {

    this.thereLocation = this.there.nativeElement.getBoundingClientRect();
    console.log(this.thereLocation);

    this.makeDisappear();
    this.movePeace();
    this.toggleTexts();
  }

  toggleTexts() {
    this.noOrThe = this.noOrThe === 'no' ? 'the' : 'no';
    this.peaceText = this.peaceText === 'peace' ? 'Peace' : 'peace';
  }

  get disappearState() {
    return this.disappear ? 'disappear1' : 'disappear2';
  }

  // peace
  movePeace() {
    this.peaceMove = !this.peaceMove;
  }

  get peaceState() {
    return this.peaceMove ? 'peace2' : 'peace1';
  }

  get periodState() {
    return this.peaceMove ? 'period2' : 'period1';
  }

}
