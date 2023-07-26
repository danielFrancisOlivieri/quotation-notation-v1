import { Component, Input, OnInit } from '@angular/core';

import { authorDescription } from 'src/app/interfaces/interface authorDescription';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  @Input() array!: Array<authorDescription>;

  ngOnInit(): void {
    console.log(this.array);
  }

}
