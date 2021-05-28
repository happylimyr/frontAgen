import {Component, Input, OnInit} from '@angular/core';
import {Tour} from "../../../shared/Tour";
import {Hotel} from "../../../shared/Hotel";
import {Address} from "../../../shared/Address";
import {City} from "../../../shared/City";
import {Country} from "../../../shared/Country";
import {HotelType} from "../../../shared/HotelType";
import {RestApiService} from "../../../shared/rest-api.service";
import {Router} from "@angular/router";
import {HotelListComponent} from "../../hotel/hotel-list/hotel-list.component";
import {TourType} from "../../../shared/TourType";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {

  @Input() tourDetails: Tour =
    new Tour('', 0, new Date(), new Date, 1, 0,
      new Hotel(1, '',
        new Address('',
          new City('',
            new Country(''))),
        new HotelType(1, '')),
      new TourType(1, 'sss'));


  hotels: Hotel[] = [];
  tourTypes: TourType[] = [];


  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.loadHotel()
    this.loadTourType()

  }

  loadTourType() {
    return this.restApi.getTourType().subscribe((data: TourType[]) => {
      this.tourTypes = data;
    })
  }

  loadHotel() {
    return this.restApi.getHotel().subscribe((data: Hotel[]) => {
      this.hotels = data;
    })
  }

  addTour() {
    return this.restApi.createTour(this.tourDetails).subscribe((data: {}) => {
      this.router.navigate(['/tour-list'])
    })
  }

}
