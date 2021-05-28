import {Country} from "./Country";

export class City {
  name: string;
  country: Country;

  constructor(name: string, country: Country) {
    this.name = name;
    this.country = country;
  }
}
