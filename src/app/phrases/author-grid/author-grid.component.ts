import { Component, OnInit } from '@angular/core';

import { authorDescription } from 'src/app/interfaces/interface authorDescription';

@Component({
  selector: 'app-author-grid',
  templateUrl: './author-grid.component.html',
  styleUrls: ['./author-grid.component.scss']
})
export class AuthorGridComponent implements OnInit {

  constructor() { }

  layoutClass = 'layout';

  // authors array

  authors: Array<authorDescription> = [
    {
      name: 'Roberto Bolano',
      description: 'Surrealist',
    },
    {
      name: 'Miranda July',
      description: 'Absurdist',
    },
    {
      name: 'Roberto Bolano',
      description: 'Surrealist',
    },
    {
      name: 'Roberto Bolano',
      description: 'Surrealist',
    },
    {
      name: 'Roberto Bolano',
      description: 'Surrealist',
    },
  ]


  ngOnInit(): void {
  }

}
