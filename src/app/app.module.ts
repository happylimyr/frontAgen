import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { TourComponent } from './component/tour/tour-list/tour.component';
import { PersonalDataComponent } from './component/personal-data/personal-data-list/personal-data.component';
import { RoleComponent } from './component/role/role.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { UserCreateComponent } from './component/user/user-create/user-create.component';
import { OrderListComponent } from './component/order/order-list/order-list.component';
import { OrderCreateComponent } from './component/order/order-create/order-create.component';
import { TourCreateComponent } from './component/tour/tour-create/tour-create.component';
import { TourTypeListComponent } from './component/tour-type/tour-type-list/tour-type-list.component';
import { TourTypeCreateComponent } from './component/tour-type/tour-type-create/tour-type-create.component';
import { HotelListComponent } from './component/hotel/hotel-list/hotel-list.component';
import { AddressListComponent } from './component/address/address-list/address-list.component';
import { CityListComponent } from './component/city/city-list/city-list.component';
import { HotelTypeListComponent } from './component/hotel-type/hotel-type-list/hotel-type-list.component';
import { LoginComponent } from './user-managment/login/login.component';
import { LogoutComponent } from './user-managment/logout/logout.component';
import { StartPageComponent } from './component/start-page/start-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyFilterPipePipe } from './component/tour/tour-list/my-filter-pipe.pipe';
import { CreateUserAdminComponent } from './component/user/create-user-admin/create-user-admin.component';
import { OrderEditComponent } from './component/order/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    PersonalDataComponent,
    RoleComponent,
    UserListComponent,
    UserCreateComponent,
    OrderListComponent,
    OrderCreateComponent,
    TourCreateComponent,
    TourTypeListComponent,
    TourTypeCreateComponent,
    HotelListComponent,
    AddressListComponent,
    CityListComponent,
    HotelTypeListComponent,
    LoginComponent,
    LogoutComponent,
    StartPageComponent,
    MyFilterPipePipe,
    CreateUserAdminComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
