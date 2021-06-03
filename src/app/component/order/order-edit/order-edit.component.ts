import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../../shared/rest-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  orderName = this.actRoute.snapshot.params['orderName'];
  orderData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getOrderByName(this.orderName).subscribe((data: {}) => {
      this.orderData = data;
    })
  }

  updateOrder(orderName: string) {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateOrder(this.orderName, this.orderData).subscribe(data => {
        this.router.navigate(['/order-list'])
      })
    }
  }

}
