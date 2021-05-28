import {Address} from "./Address";
import {HotelType} from "./HotelType";

export class Hotel {
  idHotel: number;
  name: string;
  address: Address;
  hotelType: HotelType;

  constructor(idHotel: number, name: string, address: Address, hotelType: HotelType) {
    this.idHotel = idHotel;
    this.name = name;
    this.address = address;
    this.hotelType = hotelType;
  }
}
