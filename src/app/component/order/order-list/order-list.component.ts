import {Component, OnInit} from '@angular/core';
import {Order} from "../../../shared/Order";
import {RestApiService} from "../../../shared/rest-api.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order: Order[] = [];

  constructor(public restApi: RestApiService) {
  }

  ngOnInit() {
    this.loadOrder()
  }

  loadOrder() {
    return this.restApi.getOrder().subscribe((data: Order[]) => {
      this.order = data;
    })
  }

}
