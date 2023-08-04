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

  behind = "behind";

  moveOnHover() {
    console.log('move');
    this.behind = `behind right`;
  }

  returnOnMouseLeave() {
    this.behind = `behind`;
  }

}
