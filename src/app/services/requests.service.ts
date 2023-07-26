import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor() { }

  log() {
    console.log('testing 1 2 3');
  }
}
