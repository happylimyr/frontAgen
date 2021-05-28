import {City} from "./City";

export class Address {
  name: string;
  city: City;

  constructor(name: string, city: City) {
    this.name = name;
    this.city = city;
  }
}
