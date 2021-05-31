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

  deleteOrder(idOrder: number) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteOrder(idOrder).subscribe(data => {
        this.loadOrder()
      })
    }
  }

  deleteOrderName(orderName: string) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteOrderName(orderName).subscribe(data => {
        this.loadOrder()
      })
    }
  }
}
