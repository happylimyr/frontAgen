import {Component, OnInit} from '@angular/core';
import {Order} from "../../../shared/Order";
import {RestApiService} from "../../../shared/rest-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order: Order[] = [];
  orderName = this.actRoute.snapshot.params['orderName'];
  orderData: any = {};

  constructor(public restApi: RestApiService,
              public actRoute: ActivatedRoute,
              public router: Router
  ) {
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
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteOrder(idOrder).subscribe(data => {
        this.loadOrder()
      })
    }
  }

  updateOrder(orderName: string, orderData: string) {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateOrder(this.orderName, this.orderData).subscribe(data => {
        this.router.navigate(['/order-list'])
      })
    }
  }

  deleteOrderName(orderName: string) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteOrderName(orderName).subscribe(data => {
        this.loadOrder()
      })
    }
  }


}
