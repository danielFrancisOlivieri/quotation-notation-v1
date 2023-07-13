import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[underline]'
})
export class UnderlineDirective {

  constructor(private el: ElementRef) {

    el.nativeElement.style.textDecoration = "underline #FAA613";
    this.el.nativeElement.style.color = this.underline;
   }

   @Input() underline = 'green';

@HostListener('mouseenter') onMouseEnter() {
  this.el.nativeElement.style.color = this.underline;
  this.el.nativeElement.style.textDecoration = "underline white";
}

@HostListener('mouseleave') onMouseLeave() {
  this.el.nativeElement.style.color = "white";
  this.el.nativeElement.style.textDecoration = "underline #FAA613";
}

private changeFontColor() {
  this.el.nativeElement.style.color = "red";
}




}
