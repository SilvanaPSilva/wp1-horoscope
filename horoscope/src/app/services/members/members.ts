import { HttpClient } from '@angular/common/http'; //vadded in horoscope/src/app/services/horoscope/horoscope.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//
export class Members {

  //Inject the HttpClient to make HTTP requests to the backend API
  constructor (private http: HttpClient) {
  }

  private apiUrl = 'http://localhost:3000/members';

  //Method to fetch the list of members from the backend API (routes/membersRoutes) using an HTTP GET request
  getMembers() {
    return this.http.get(this.apiUrl);
  }

  addMember(member: any){
    return this.http.post(this.apiUrl, member);
  }

  deleteMember(id: string) {
    return this.http.delete(this.apiUrl+'/'+id);
  }
}

