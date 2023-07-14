import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'whole-encyclopedia',
  templateUrl: './whole-encyclopedia.component.html',
  styleUrls: ['./whole-encyclopedia.component.scss'],
  animations: [
    trigger('animationTrigger', [
      state('man1', style({})),
      state('man2', style({ 
      transform: 'translateY(784%) translateX(70px) scale(150%)'
    })),
      state('is1', style({})),
      state('is2', style({
        transform: 'translateY(200px) translateX(155px) scale(150%)'
      })),
      state('manifold1', style({})),
      state('manifold2', style({
        transform: 'translateY(142px) translateX(-230px) scale(150%)'
      })),
      state('whole1', style({})),
      state('whole2', style({transform: 'translateX(-250px) rotate(90deg)'  })),

      transition('man1 => man2', animate('1000ms ease-in')),
      transition('man2 => man1', animate('1000ms ease-in')),
      transition('is1 => is2', animate('1000ms ease-in')),
      transition('is2 => is1', animate('1000ms ease-in')),
      transition('manifold1 => manifold2', animate('1000ms ease-in')),
      transition('manifold2 => manifold1', animate('1000ms ease-in')),
      transition('whole1 => whole2', animate('1000ms ease-in')),
      transition('whole2 => whole1', animate('1000ms ease-in'))
    ])]
})
export class WholeEncyclopediaComponent {

  @ViewChild('box') rearrangedBox!: ElementRef;

  manMove = false;
  isMove = false;
  manifoldMove = false;
  wholeMove = false;
  counter = 0;

  moveMan() {
    this.manMove = !this.manMove;
  }

  moveIs() {
    this.isMove = !this.isMove;
  }

  moveManifold() {
    this.manifoldMove = !this.manifoldMove;
  }

  moveWhole() {
    this.wholeMove = !this.wholeMove;
  }

  animate() {
    console.log(this.rearrangedBox.nativeElement.getBoundingClientRect());

    
    
    this.moveMan();
    this.moveIs();
    this.moveManifold();
    this.moveWhole();
    this.counter++;
  }

  get manState() {
    return this.manMove ? 'man2' : 'man1';
  }
  
  get isState() {
    return this.isMove ? 'is2' : 'is1';
  }

  get manifoldState() {
    return this.manifoldMove ? 'manifold2' : 'manifold1';
  }

  get wholeState() {
    return this.wholeMove ? 'whole2' : 'whole1';
  }

}
