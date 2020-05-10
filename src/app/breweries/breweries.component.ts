import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  Brewery: Object;
  // tslint:disable-next-line:variable-name
  constructor( private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.Brewery = data;
      console.log(this.Brewery);
    });
  }

}
