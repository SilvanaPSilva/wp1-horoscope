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
    // sun_sign_prediction/daily/:zodiacName (daily/:zodiacName)
    // http://localhost:3000/horoscope/today/aries
  }

   getTomorrow(sign: string) {
    return this.http.get(this.apiUrl+'/tomorrow/'+ sign);
    // sun_sign_prediction/daily/next/:zodiacName (daily/next/:zodiacName)
    //http://localhost:3000/horoscope/tomorrow/aries
    
  }

   getMonthly(sign: string) {
    return this.http.get(this.apiUrl+'/monthly/'+ sign);
    //horoscope_prediction/monthly/:zodiacName (monthly/:zodiacName)
    //http://localhost:3000/horoscope/monthly/aries
  }
}




