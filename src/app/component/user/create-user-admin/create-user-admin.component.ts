import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../shared/user";
import {PersonalData} from "../../../shared/personal-data";
import {Role} from "../../../shared/role";
import {RestApiService} from "../../../shared/rest-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user-admin',
  templateUrl: './create-user-admin.component.html',
  styleUrls: ['./create-user-admin.component.css']
})
export class CreateUserAdminComponent implements OnInit {

  @Input() userDetails: User = new User(1,'', '',
    new PersonalData('', '', '', ''),
    new Role('customer'), 1);

  roles: Role[] = [];

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.loadRole()
  }

  loadRole() {
    return this.restApi.getRole().subscribe((data: Role[]) => {
      this.roles = data;
    })
  }

  addUser() {
    this.restApi.createUser(this.userDetails).subscribe((data: {}) => {
      this.router.navigate(['/user-list'])
    })
  }
}
