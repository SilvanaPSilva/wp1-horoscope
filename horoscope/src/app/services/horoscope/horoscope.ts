import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class Horoscope {

  private apiUrl = 'http://localhost:3000/horoscope';

  constructor(private http: HttpClient) {}

  getToday(sign: string) {
    return this.http.get(this.apiUrl+'/today/'+ sign);
  }

   getTomorrow(sign: string) {
    return this.http.get(this.apiUrl+'/tomorrow/'+ sign);
  }

   getMonthly(sign: string) {
    return this.http.get(this.apiUrl+'/monthly/'+ sign);
  }
}
