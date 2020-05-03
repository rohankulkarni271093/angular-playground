import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  clickCounter: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  timeVariable: string = 'times';
  constructor() { }

  ngOnInit(): void {
  }

  countclick(){
    this.clickCounter += 1;
    // tslint:disable-next-line:no-conditional-assignment
    if (this.clickCounter === 1){
      this.timeVariable = '';
      this.timeVariable = 'time';
    }
    else{
      this.timeVariable = '';
      this.timeVariable = 'times';
    }
   }

}
