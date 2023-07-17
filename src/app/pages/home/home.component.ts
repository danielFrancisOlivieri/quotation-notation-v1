import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routes: Route[] = [];

  constructor(private router: Router) {

    this.routes = router.config.slice(1, router.config.length);

   }


  ngOnInit(): void {
    console.log(this.routes);
  }

}
