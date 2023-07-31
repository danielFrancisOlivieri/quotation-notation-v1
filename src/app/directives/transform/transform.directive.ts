import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[transform]'
})
export class TransformDirective {

  constructor() { }

  @Input()
  set transform(input: string) {
    console.log(input);
    // modify element it is attached to 
    // and add an event emitter somewhere 
  }

}
