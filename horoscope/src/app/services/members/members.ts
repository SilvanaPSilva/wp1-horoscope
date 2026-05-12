import { HttpClient } from '@angular/common/http'; // HttpClient used to communicate with backend API
import { Injectable } from '@angular/core';
import { InterfaceMember } from '../../models/interfaceMember';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})

export class MembersService {
  
  //private apiUrl = 'http://localhost:3000/members';
  private apiUrl = `${environment.apiUrl}/members`;

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
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}

