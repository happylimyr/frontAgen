import { Injectable } from '@angular/core';
import {UserListComponent} from "../../component/user/user-list/user-list.component";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(userlogin: string, password: string) {
    if (userlogin === "javainuse" && password === "password") {
      sessionStorage.setItem('userlogin', userlogin)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userlogin')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('userlogin')
  }
}
