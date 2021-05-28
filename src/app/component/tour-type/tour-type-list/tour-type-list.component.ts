import {Component, OnInit} from '@angular/core';
import {TourType} from "../../../shared/TourType";
import {RestApiService} from "../../../shared/rest-api.service";

@Component({
  selector: 'app-tour-type-list',
  templateUrl: './tour-type-list.component.html',
  styleUrls: ['./tour-type-list.component.css']
})
export class TourTypeListComponent implements OnInit {

  tourType: TourType[] = [];

  constructor(public restApi: RestApiService) {
  }

  ngOnInit() {
    this.loadTourType()
  }

  loadTourType() {
    return this.restApi.getTourType().subscribe((data: TourType[]) => {
      this.tourType = data;
    })
  }

}
