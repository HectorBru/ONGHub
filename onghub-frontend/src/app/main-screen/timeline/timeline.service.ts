import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  private requests;
  constructor(private httpClient: HttpClient) {}
  async getUsers() {
    return this.httpClient
      .get('http://localhost:3000/auth/getSession')
      .toPromise();
  }
}
