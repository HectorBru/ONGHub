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

  async createPost(post: Object) {
    return await this.httpClient
      .post('http://localhost:3000/api/post/', {
        title: post['title'],
        description: post['description'],
        author: post['author'],
        authorNgo: post['authorNgo'],
        ODS: post['ODS'],
        tags: post['tags'],
        likes: 0,
        ngoThatLiked: [],
        registeredUserThatLiked: [],
      })
      .toPromise();
  }
}
