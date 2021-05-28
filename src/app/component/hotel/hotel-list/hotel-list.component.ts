import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../../shared/Hotel";
import {RestApiService} from "../../../shared/rest-api.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: `./hotel-list.component.html`,
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotel: Hotel[] = [];

  constructor(public restApi: RestApiService) {
  }

  ngOnInit(){
    this.loadHotel()
  }

  loadHotel() {
    return this.restApi.getHotel().subscribe((data: Hotel[]) => {
      this.hotel = data;
    })
  }
}
