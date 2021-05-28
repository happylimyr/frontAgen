import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../shared/Order";
import {User} from "../../../shared/user";
import {PersonalData} from "../../../shared/personal-data";
import {Role} from "../../../shared/role";
import {Status} from "../../../shared/Status";
import {Tour} from "../../../shared/Tour";
import {UserOnlyId} from "../../../shared/UserOnlyId";
import {RestApiService} from "../../../shared/rest-api.service";
import {Router} from "@angular/router";
import {Hotel} from "../../../shared/Hotel";
import {Address} from "../../../shared/Address";
import {City} from "../../../shared/City";
import {Country} from "../../../shared/Country";
import {HotelType} from "../../../shared/HotelType";
import {TourType} from "../../../shared/TourType";

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {


  @Input() orderDetails: Order =
    new Order('', '0', 1,
      new User(1, '', '',
        new PersonalData('', '', '', ''),
        new Role(''), 1),
      new Status(''),
      new Tour('', 0, new Date(), new Date, 1, 0,
        new Hotel(1, '',
          new Address('',
            new City('',
              new Country(''))),
          new HotelType(1, '')),
        new TourType(1, 'sss')))

  users: User[] = [];
  tours: Tour[] = [];


  constructor(public restApi: RestApiService,
              public router: Router) {
  }


  ngOnInit(): void {
    this.loadUser()
    this.loadTour()

  }

  loadUser() {
    return this.restApi.getUser().subscribe((data: User[]) => {
      this.users = data;
    })
  }

  loadTour() {
    return this.restApi.getTour().subscribe((data: Tour[]) => {
      this.tours = data;
    })
  }


  addOrder() {
    this.restApi.createOrder(this.orderDetails).subscribe((data: {}) => {
      this.router.navigate(['/order-list'])
    })
  }

}
