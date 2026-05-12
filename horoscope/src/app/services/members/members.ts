import { HttpClient } from '@angular/common/http'; // HttpClient used to communicate with backend API
import { Injectable } from '@angular/core';
import { InterfaceMember } from '../../models/interfaceMember';


@Injectable({
  providedIn: 'root',
})

export class Members {
  
  private apiUrl = 'http://localhost:3000/members';

  //Inject the HttpClient to make HTTP requests to the backend API
  constructor(private http: HttpClient) {}

  //*
  getMembers() {
    return this.http.get<InterfaceMember[]>(this.apiUrl);
  }

  addMember(member: InterfaceMember) {
    return this.http.post<InterfaceMember>(this.apiUrl, member);
  }

  deleteMember(id: string) {
    return this.http.delete<{ message: string }>(this.apiUrl + '/' + id);
  }
}

