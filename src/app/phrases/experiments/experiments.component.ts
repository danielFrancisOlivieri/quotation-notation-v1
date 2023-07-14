import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
      })),
      state('secondary', style({
        transform: `translateX({{translateValueX}}) translateY({{translateValueY}}) scale(150%)`,
        fontSize: '{{emSize}}'
      }), 
      {
        params: {emSize: '1em', translateValueX: '-30px', translateValueY: '400px'}
      }),
      transition('initial => secondary', animate('700ms ease-in')),
      transition('secondary => initial', animate('700ms ease-in')),
    ])
  ]
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('experimentBox') experimentBox!: ElementRef;
  @ViewChild('test') test!:ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getTranslateXValue()
  }
  
  triggerValue = true;
  emSize = '1em';
  translateValueY = '450px';
  translateValueX = '0px';

  animateExperiment() {
    console.log(this.experimentBox.nativeElement.getBoundingClientRect());

    this.getTranslateYValue();
    this.getTranslateXValue();

    this.toggleTriggerValue();
  }

  toggleTriggerValue () {
    this.triggerValue = !this.triggerValue;
  }

  get getTriggerValue() {
    return this.triggerValue ? 'initial' : 'secondary';
  }


  getTranslateXValue() {
 // get X transform value 
    // make sure this also happens on screen resize 
    let translateXPosition = 0;
    let offset = 20;
    let currentX = this.test.nativeElement.getBoundingClientRect().left;
    let boxLeftX = this.experimentBox.nativeElement.getBoundingClientRect().left;
    if (currentX > boxLeftX) {
      translateXPosition = currentX - boxLeftX - offset;
    }
    this.translateValueX = `-${translateXPosition}px`;
  }

  getTranslateYValue() {
  // get Y transform value 
  let height = this.experimentBox.nativeElement.getBoundingClientRect().height;
  let middleY = (height / 2); 
  this.translateValueY = `${middleY}px`;
  }

}
