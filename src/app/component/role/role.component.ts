import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../shared/rest-api.service";
import {Role} from "../../shared/role";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  role: Role[] = [];

  constructor(public restApi: RestApiService) {
  }

  ngOnInit() {
    this.loadRole()
  }

  loadRole() {
    return this.restApi.getRole().subscribe((data: Role[]) => {
      this.role = data;
    })
  }
}
