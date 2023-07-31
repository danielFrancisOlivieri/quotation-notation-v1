import { Component, OnChanges } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {

  constructor() { }

  name = new FormControl("test");

  ngOnChanges(changes: any) {
    console.log(changes);
    this.name.valueChanges.subscribe((data) => {
      console.log(data);
    })
  }

}
