import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExternalProfileNgoService {
  constructor(private httpClient: HttpClient) {}

  async getUser() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', localStorage.getItem('token'));
    return this.httpClient
      .get('http://localhost:3000/auth/getSession', { params: queryParams })
      .toPromise();
  }

  async getNgoById(ngoId: number) {
    return await this.httpClient
      .get('http://localhost:3000/api/ngo/getById/' + ngoId)
      .toPromise();
  }

  async getNgoByUsername(ngoUsername: string) {
    return await this.httpClient
      .get('http://localhost:3000/api/ngo/getByUsername/' + ngoUsername)
      .toPromise();
  }

  async getPostsOfNgo(ngoUsername: string) {
    return await this.httpClient
      .get('http://localhost:3000/api/post/getPostsFromNgo/' + ngoUsername)
      .toPromise();
  }
}
