import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../../shared/rest-api.service";
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../../../shared/user";
import {Tour} from "../../../shared/Tour";

@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User[] = [];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) {
  }


  ngOnInit() {
    this.loadUser()
  }

  loadUser() {
    return this.restApi.getUser().subscribe((data: User[]) => {
      this.user = data;
    })
  }
}
