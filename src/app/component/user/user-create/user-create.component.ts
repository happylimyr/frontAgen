import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RestApiService} from "../../../shared/rest-api.service";
import {Role} from "../../../shared/role";
import {User} from "../../../shared/user";
import {PersonalData} from "../../../shared/personal-data";


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  @Input() userDetails: User = new User(1,'', '',
    new PersonalData('', '', '', ''),
    new Role('customer'), 1);

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {
  }

  ngOnInit() {
  }


  addUser() {
    this.restApi.createUser(this.userDetails).subscribe((data: {}) => {
      this.router.navigate(['/user-list'])
    })
  }

}
