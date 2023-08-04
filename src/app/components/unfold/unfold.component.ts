import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unfold',
  templateUrl: './unfold.component.html',
  styleUrls: ['./unfold.component.scss']
})
export class UnfoldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  behindRight = "behind";
  behindDown = "behind";
  behindLeft = "behind"

  moveOnHover() {
    console.log('move');
    this.behindRight = `behind right`;
    this.behindDown = `behind down`;
    this.behindLeft = `behind left`
  }

  returnOnMouseLeave() {
    this.behindRight = `behind`;
    this.behindDown = `behind`;
    this.behindLeft = `behind`;
  }

}
