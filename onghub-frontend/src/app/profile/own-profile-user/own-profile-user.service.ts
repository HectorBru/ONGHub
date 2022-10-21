import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OwnProfileUserService {
  constructor(private httpClient: HttpClient) {}

  async getRegisteredUserByUsername(userUsername: string) {
    return await this.httpClient
      .get(
        'http://localhost:3000/api/registeredUser/getByUsername/' + userUsername
      )
      .toPromise();
  }

  async updateUser(
    userId: number,
    username: string,
    name: string,
    email: string
  ) {
    return await this.httpClient
      .put<Object>('http://localhost:3000/api/registeredUser/' + userId, {
        username: username,
        name: name,
        email: email,
      })
      .toPromise();
  }
}
