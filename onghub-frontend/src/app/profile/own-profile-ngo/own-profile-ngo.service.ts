import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OwnProfileNgoService {
  constructor(private httpClient: HttpClient) {}

  async getNgoByUsername(ngoUsername: string) {
    return await this.httpClient
      .get('http://localhost:3000/api/ngo/getByUsername/' + ngoUsername)
      .toPromise();
  }
}
