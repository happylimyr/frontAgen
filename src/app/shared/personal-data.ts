export class PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;


  constructor(firstname: string,  lastname: string,  email: string,  phone: string) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = email;
    this.phone = phone;
  }
}
