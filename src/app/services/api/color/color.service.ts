import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Color } from 'src/app/models/color';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private baseUrl: string = environment.API_URL + 'colors/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token ' + environment.TOKEN,
    })
  };

  constructor(private http: HttpClient) {}

  // GET
  public getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.baseUrl, this.httpOptions)
  }

  public getColorFromId(id: number): Observable<Color> {
    return this.http.get<Color>(this.baseUrl + id + '/', this.httpOptions);
  }

  // POST
  public addColor(color: Color): Observable<Color> {
    return this.http.post<Color>(this.baseUrl, color, this.httpOptions);
  }

  // PUT
  public editColor(color: Color): Observable<Color> {
  return this.http.put<Color>(this.baseUrl  + color.id  + '/', color, this.httpOptions);
  }

  // DELETE
  public deleteColor(id: number): Observable<Color> {
    return this.http.delete<Color>(this.baseUrl  + id + '/', this.httpOptions);
  }
}
