import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../../shared/rest-api.service";
import {ActivatedRoute, Router} from '@angular/router';
import {PersonalData} from "../../../shared/personal-data";


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  personalData: PersonalData[] = [];

  constructor(public restApi: RestApiService) {

  }

  ngOnInit() {
    this.loadPersonalData()
  }

  loadPersonalData() {
    return this.restApi.getPersonalData().subscribe((data: PersonalData[]) => {
      this.personalData = data;
    })
  }

}
