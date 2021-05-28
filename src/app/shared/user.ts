import {PersonalData} from "./personal-data";
import {Role} from "./role"

export class User {
  idUser: number;
  loginUser: string;
  passwordUser: string;
  personalData: PersonalData;
  role: Role;
  activeStatus: number;


  constructor(idUser: number, loginUser: string, passwordUser: string, personalData: PersonalData, role: Role, activeStatus: number) {
    this.idUser = idUser;
    this.loginUser = loginUser;
    this.passwordUser = passwordUser;
    this.personalData = personalData;
    this.role = role;
    this.activeStatus = activeStatus;
  }
}
