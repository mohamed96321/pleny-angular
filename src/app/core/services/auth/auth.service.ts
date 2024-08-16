import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, {
      username,
      password,
      expiresInMins: 30,
    });
  }

  getCurrentUser(token: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  refreshSession(refreshToken: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/refresh`, {
      refreshToken,
    });
  }
}
