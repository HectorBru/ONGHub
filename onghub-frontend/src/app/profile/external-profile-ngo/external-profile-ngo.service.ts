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
    let posts = await this.httpClient
      .get('http://localhost:3000/api/post/getPostsFromNgo/' + ngoUsername)
      .toPromise();
    let postsArray = Object.entries(posts);
    for (let i = 0; i < postsArray.length; i++) {
      let post = postsArray[i][1];
      let ngo = await this.httpClient
        .get('http://localhost:3000/api/ngo/getById/' + post['authorNgo'])
        .toPromise();
      post['authorNgo'] = ngo;
    }
    return posts;
  }

  async follow(userId: number, ngoId: number) {
    let ngo;
    ngo = await this.httpClient
      .get('http://localhost:3000/api/ngo/getById/' + ngoId)
      .toPromise();
    if (!ngo['subscribedUsers']) ngo['subscribedUsers'] = [];
    let ngoSubscribers: number[] = ngo['subscribedUsers'];
    console.log(ngoSubscribers.indexOf(userId));
    if (ngoSubscribers.indexOf(userId) > -1) {
      console.log('follow' + ngo);
      let index = ngoSubscribers.indexOf(userId);
      delete ngoSubscribers[index];
      ngo['subscribedUsers'] = ngoSubscribers;
      if (
        await this.httpClient
          .put('http://localhost:3000/api/ngo/unfollow/', {
            userId: userId,
            ngo,
          })
          .toPromise()
      ) {
        return 'unfollowed';
      } else return 'error';
    } else {
      ngo['subscribedUsers'].push(userId);
      console.log(ngo);
      if (
        await this.httpClient
          .put('http://localhost:3000/api/ngo/follow/', {
            userId: userId,
            ngo,
          })
          .toPromise()
      ) {
        return 'followed';
      } else return 'error';
    }
  }
}
