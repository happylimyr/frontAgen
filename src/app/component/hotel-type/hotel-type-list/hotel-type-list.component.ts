import {Component, OnInit} from '@angular/core';
import {HotelType} from "../../../shared/HotelType";
import {RestApiService} from "../../../shared/rest-api.service";

@Component({
  selector: 'app-hotel-type-list',
  templateUrl: './hotel-type-list.component.html',
  styleUrls: ['./hotel-type-list.component.css']
})
export class HotelTypeListComponent implements OnInit {

  hotelType: HotelType[] = [];

  constructor(public restApi: RestApiService) {
  }

  ngOnInit(): void {
    this.loadHotelType()
  }

  loadHotelType() {
    return this.restApi.getHotelType().subscribe((data: HotelType[]) => {
      this.hotelType = data;
    })
  }

}
