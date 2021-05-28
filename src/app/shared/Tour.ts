import {TourType} from "./TourType";
import {Hotel} from "./Hotel";
import {Subscription} from "rxjs";

export class Tour {
  name: string;
  price: number;
  dateStart: Date;
  dateEnd: Date;
  peopleNumber: number;
  firePrice: number;
  hotel: Hotel;
  tourType: TourType;




  constructor(name: string, price: number, dateStart: Date, dateEnd: Date, peopleNumber: number, firePrice: number, hotel: Hotel, tourType: TourType) {
    this.name = name;
    this.price = price;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.peopleNumber = peopleNumber;
    this.firePrice = firePrice;
    this.hotel = hotel;
    this.tourType = tourType;
  }
}
