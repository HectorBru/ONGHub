import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private requests: any;
  constructor(private httpClient: HttpClient) {}

  async login(usernameOrEmail: string, password: string) {
    let user = { usernameOrEmail: usernameOrEmail, password: password };
    return await this.httpClient
      .post<Object>('http://localhost:3000/auth/login', user)
      .toPromise();
  }
}
