import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

/*

To do:
1. Collect quotes
2. Set up page
3. Have darkness close in 
4. Create array of quotes
5. Have the quotes move 

*/

@Component({
  selector: 'app-philosophy-death',
  templateUrl: './philosophy-death.component.html',
  styleUrls: ['./philosophy-death.component.scss']
})
export class PhilosophyDeathComponent implements OnInit {

  constructor() { }

  @ViewChild('philosophy') box!: ElementRef;

  ngOnInit(): void {
  }


  changeMainCanvasSize(heightChangeAmount: number, widthChangeAmount: number) {
    console.log(this.box.nativeElement.getBoundingClientRect())

  }

}
