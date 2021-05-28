import {Component, OnInit} from '@angular/core';
import {City} from "../../../shared/City";
import {RestApiService} from "../../../shared/rest-api.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  city: City[] = [];

  constructor(
    public restApi: RestApiService
  ) {
  }

  ngOnInit(): void {
    this.loadCity()
  }

  loadCity() {
    this.restApi.getCity().subscribe((date: City[]) => {
      this.city = date;
    })
  }

}
