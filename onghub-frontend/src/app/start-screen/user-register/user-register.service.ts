import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterService {
  constructor(private httpClient: HttpClient) {}

  async register(
    name: string,
    username: string,
    password: string,
    ODS: string[],
    email: string,
    profilePicture: string
  ) {
    let user = {
      username: username,
      name: name,
      email: email,
      password: password,
      ODS: ODS,
      profilePicture: profilePicture,
    };
    return await this.httpClient
      .post<Object>('http://localhost:3000/auth/signupRegisteredUser', user)
      .toPromise();
  }
}
