import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss']
})
export class CitationComponent implements OnInit {

  constructor() { }

  @Input('author') author = ''; 

  ngOnInit(): void {
  }

}
