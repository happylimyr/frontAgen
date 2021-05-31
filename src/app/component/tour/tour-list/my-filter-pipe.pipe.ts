import { Pipe, PipeTransform } from '@angular/core';
import {Hotel} from "../../../shared/Hotel";
import {Tour} from "../../../shared/Tour";

@Pipe({
  name: 'myFilterPipe',
  pure: false
  })
export class MyFilterPipePipe implements PipeTransform {

  transform(tour: any[], filter: Tour ): any {
    if(!tour || !filter){
      return tour;
    }
    return tour.filter(tour => tour.hotel.address.city.country.name.indexOf(filter.hotel.address.city.country.name) !== -1)
  }

}
