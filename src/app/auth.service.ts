import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '';

  constructor(private http: HttpClient) { }

  login(credentials: {email: string, password: string}):
  Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user: {username: string, email: string, password: string}):
  Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
