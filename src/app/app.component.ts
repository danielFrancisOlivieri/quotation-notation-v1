import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'epoch';
  routerLayout = 'centerLayout';
  results: any; 
  constructor(http: HttpClient) {
    const path = 'https://api.github.com/search/repositories?q=angular';
    this.results = http.get(path);
  }





}
