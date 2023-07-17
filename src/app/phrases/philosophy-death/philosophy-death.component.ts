import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

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

  @ViewChild('philosophyBoxId') box!: ElementRef;
  @ViewChild('quoteId') quote!: ElementRef;

  height = 100;
  width = 100;
  top = 0;
  left = 0;
  quoteCount = 0;

  quoteArray = [
    {text: 'To study philosophy is to learn to die.',
    fontSize: 10,
    x: 0,
    y: 20
  },
    {text: 'We die a little bit every day',
    fontSize: 8,
    x: 30,
    y: 20
  }, {text: 'We cannot practice death',
  fontSize: 6,
  x: 10,
  y: 10
}, {
  text: '“To lament that we shall not be alive a hundred years hence, is the same folly as to be sorry we were not alive a hundred years ago.”',
  fontSize: 1,
  x: 10,
  y: 3
}, {
  text: '“Now, of all the benefits that virtue confers upon us, the contempt of death is one of the greatest, as the means that accommodates human life with a soft and easy tranquillity, and gives us a pure and pleasant taste of living, without which all other pleasure would be extinct.”',
  fontSize: 2,
  x: 10,
  y: 3
}

  ]

  currentQuote = this.quoteArray[0];

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event']) 
  onKeydown($event: KeyboardEvent) {
    console.log($event.key);
    if ($event.key == 'ArrowRight') {
      console.log($event.key);
      this.advanceTopAndLeft();
      this.advanceHeightAndWidth();
      this.positionText();
      this.changeMainCanvasSize();
    } else if ($event.key == 'ArrowLeft') {
      console.log($event.key);
      this.retractTopAndLeft();
      this.retractHeightAndWidth();
      this.changeMainCanvasSize();
    }
  };

  changeHeight(amount: number) {
    this.height += amount;
  }
  changeWidth(amount: number) {
    this.width += amount; 
  }
  changeLeft(amount: number) {
    this.left += amount;
  }
  changeTop(amount: number) {
    this.top += amount; 
  }

  advanceHeightAndWidth() {
    if (this.height > 30) {
      this.height -= 5;
    } else if (this.height > 10) {
      this.height -= 3;
    }

    if (this.width > 30) {
      this.width -= 5;
    } else if (this.width > 10) {
      this.width -= 3;
    }
  }

    retractHeightAndWidth() {
      if (this.height < 30) {
        this.height += 5;
      } else if (this.height < 10) {
        this.height += 3;
      }
  
      if (this.width < 30) {
        this.width += 5;
      } else if (this.width < 10) {
        this.width += 3;
      }

  }

  advanceTopAndLeft() {
    if (this.top < 30) {
      this.top += 5;
    }
    if (this.left < 30) {
      this.left += 5;
    }
  }

  retractTopAndLeft() {
    if (this.top >= 10) {
      this.top -= 5;
    }

    if (this.left >= 10) {
      this.left -= 5;
    }
  }

  changeMainCanvasSize() {
    console.log(this.box.nativeElement.getBoundingClientRect());
    this.box.nativeElement.setAttribute(`style`, `top: ${this.top}%; left: ${this.left}%; height: ${this.height}vh; width: ${this.width}vw` );
  
  }

  positionText() {
    console.log(this.box.nativeElement.getBoundingClientRect());
    console.log(this.quote.nativeElement.getBoundingClientRect());
    this.quoteCount++;
    this.currentQuote = this.quoteArray[this.quoteCount];
    this.quote.nativeElement.setAttribute('style', `font-size: ${this.currentQuote.fontSize}em`);

  }

}
