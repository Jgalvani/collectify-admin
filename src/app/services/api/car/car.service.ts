import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Car } from 'src/app/models/car';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl: string = environment.API_URL + 'cars/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token ' + environment.TOKEN,
    })
  };


  constructor(private http: HttpClient) {}

  // GET
  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl, this.httpOptions)
  }

  public getCarFromId(id: number): Observable<Car> {
    return this.http.get<Car>(this.baseUrl + id + '/', this.httpOptions);
  }

  // POST
  public addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl, car, this.httpOptions);
  }

  // PUT
  public editCar(car: Car): Observable<Car> {
  return this.http.put<Car>(this.baseUrl + car.id + '/' , car, this.httpOptions);
  }

  // DELETE
  public deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(this.baseUrl + id + '/', this.httpOptions);
  }
}
