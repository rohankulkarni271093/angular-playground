import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  testMethod(){
    console.log('Hey what is up!');
  }
}
