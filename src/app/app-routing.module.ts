import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TourComponent} from "./component/tour/tour-list/tour.component";
import {PersonalDataComponent} from "./component/personal-data/personal-data-list/personal-data.component";
import {RoleComponent} from "./component/role/role.component";
import {UserListComponent} from "./component/user/user-list/user-list.component";
import {UserCreateComponent} from "./component/user/user-create/user-create.component";
import {OrderListComponent} from "./component/order/order-list/order-list.component";
import {OrderCreateComponent} from "./component/order/order-create/order-create.component";
import {TourTypeListComponent} from "./component/tour-type/tour-type-list/tour-type-list.component";
import {TourCreateComponent} from "./component/tour/tour-create/tour-create.component";
import {HotelListComponent} from "./component/hotel/hotel-list/hotel-list.component";
import {AddressListComponent} from "./component/address/address-list/address-list.component";
import {CityListComponent} from "./component/city/city-list/city-list.component";
import {HotelTypeListComponent} from "./component/hotel-type/hotel-type-list/hotel-type-list.component";
import {TourTypeCreateComponent} from "./component/tour-type/tour-type-create/tour-type-create.component";

const routes: Routes = [
  {path: 'address-list', component: AddressListComponent},
  {path: 'city-list', component: CityListComponent},
  {path: 'hotel-list', component: HotelListComponent},
  {path: 'hotel-type-list', component: HotelTypeListComponent},
  {path: 'tour', component: TourComponent},
  {path: 'personal-data-list', component: PersonalDataComponent},
  {path: 'role', component: RoleComponent},
  {path: 'user', component: UserListComponent},
  {path: 'user-list-create', component: UserCreateComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'order-list-create', component: OrderCreateComponent},
  {path: 'tour-type-list', component: TourTypeListComponent},
  {path: 'tour-list-create', component: TourCreateComponent},
  {path: 'tour-type-create', component: TourTypeCreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
