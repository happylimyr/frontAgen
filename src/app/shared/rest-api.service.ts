import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tour} from './Tour';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {PersonalData} from "./personal-data";
import {Role} from "./role";
import {User} from "./user";
import {UserListComponent} from "../component/user/user-list/user-list.component";
import {Order} from "./Order";
import {TourType} from "./TourType";
import {Hotel} from "./Hotel";
import {Address} from "./Address";
import {City} from "./City";
import {HotelType} from "./HotelType";


@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiURL + '/address')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getCity(): Observable<City[]> {
    return this.http.get<City[]>(this.apiURL + '/city')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getHotel(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiURL + '/hotel')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  getHotelType(): Observable<HotelType[]> {
    return this.http.get<HotelType[]>(this.apiURL + '/hoteltype')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL + '/user')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiURL + '/order', JSON.stringify(order), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }



  createTour(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(this.apiURL + '/tour', JSON.stringify(tour), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  createTourType(tourType: TourType): Observable<TourType> {
    return this.http.post<TourType>(this.apiURL + '/tourtype', JSON.stringify(tourType), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + '/user', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  getPersonalData(): Observable<PersonalData[]> {
    return this.http.get<PersonalData[]>(this.apiURL + '/personaldata')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getRole(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiURL + '/role')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTour(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiURL + '/tour')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTourType(): Observable<TourType[]> {
    return this.http.get<TourType[]>(this.apiURL + '/tourtype')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURL + '/order')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteOrder(idOrder: number){
    return this.http.delete<Order[]>(this.apiURL + '/order/id/' + idOrder, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }
  deleteOrderName(orderName: string){
    return this.http.delete<Order[]>(this.apiURL + '/order/' + orderName, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

