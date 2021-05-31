import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../../shared/rest-api.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Tour} from '../../../shared/Tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  filterargs = Tour ;
  tour: Tour[] = [];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) {
  }

  ngOnInit() {
    this.loadTour()

  }

  loadTour() {
    return this.restApi.getTour().subscribe((data: Tour[]) => {
      this.tour = data;
    })
  }

}
