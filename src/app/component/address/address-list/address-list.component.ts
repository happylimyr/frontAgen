import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../../shared/rest-api.service";
import {Address} from "../../../shared/Address";
import {City} from "../../../shared/City";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  address: Address[] = [];

  constructor(
    public restApi: RestApiService
  ) {
  }

  ngOnInit(): void {
    this.loadAddress()
  }

  loadAddress() {
    this.restApi.getAddress().subscribe((data: Address[]) => {
      this.address = data;
    })
  }
}
