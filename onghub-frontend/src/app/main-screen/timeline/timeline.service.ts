import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  private requests;
  constructor(private httpClient: HttpClient) {}

  async getUsers() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', localStorage.getItem('token'));
    return this.httpClient
      .get('http://localhost:3000/auth/getSession')
      .toPromise();
  }

  async getPostsOfFollowedNgos() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', localStorage.getItem('token'));
    let posts = await this.httpClient
      .get('http://localhost:3000/api/post/getAll', { params: queryParams })
      .toPromise();
    posts = posts['msg'];
    let postsArray = Object.entries(posts);
    for (let i = 0; i < postsArray.length; i++) {
      let post = postsArray[i][1];
      console.log(post);
      let ngo = await this.httpClient
        .get('http://localhost:3000/api/ngo/getById/' + post['authorNgo'])
        .toPromise();
      post['authorNgo'] = ngo;
    }
    return posts;
  }

  async getPostsOrderedByOdsLikesPublishedDate() {}
}
