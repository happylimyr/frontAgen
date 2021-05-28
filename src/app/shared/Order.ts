import {User} from "./user";
import {Status} from "./Status";
import {Tour} from "./Tour";
import {UserOnlyId} from "./UserOnlyId";

export class Order {
  orderName: string;
  discount: string;
  countOfMembers: number;
  user: User;
  status: Status;
  tour: Tour;


  constructor(orderName: string, discount: string, countOfMembers: number, user: User, status: Status, tour: Tour) {
    this.orderName = orderName;
    this.discount = discount;
    this.countOfMembers = countOfMembers;
    this.user = user;
    this.status = status;
    this.tour = tour;
  }
}
