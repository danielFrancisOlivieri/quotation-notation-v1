import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<boolean> {
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return of(true);
  }
}
