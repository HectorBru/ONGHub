import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgoRegisterService {
  constructor(private httpClient: HttpClient) {}

  async register(
    name: string,
    username: string,
    password: string,
    influenceArea: string,
    orientation: string[],
    mission: string,
    webPage: string,
    email: string,
    profilePicture: string
  ) {
    let user = {
      username: username,
      name: name,
      email: email,
      password: password,
      influenceArea: influenceArea,
      orientation: orientation,
      mission: mission,
      webPage: webPage,
      profilePicture: profilePicture,
    };
    return await this.httpClient
      .post<Object>('http://localhost:3000/auth/signupNgo', user)
      .toPromise();
  }
}
