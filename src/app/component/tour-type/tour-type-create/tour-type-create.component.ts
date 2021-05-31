import {Component, Input, OnInit} from '@angular/core';
import {TourType} from "../../../shared/TourType";
import {RestApiService} from "../../../shared/rest-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tour-type-create',
  templateUrl: './tour-type-create.component.html',
  styleUrls: ['./tour-type-create.component.css']
})
export class TourTypeCreateComponent implements OnInit {

  @Input() tourTypeDetails: TourType =
    new TourType(1, '');


  constructor(public restApi: RestApiService,
              public router: Router) {
  }

  ngOnInit(){

  }

  addTourType() {
    return this.restApi.createTourType(this.tourTypeDetails).subscribe((data: {}) => {
      this.router.navigate(['/tour-type-list'])
    })
  }

}
