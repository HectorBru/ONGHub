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
      .get('http://localhost:3000/auth/getSession', { params: queryParams })
      .toPromise();
  }

  async getById(postId: number) {
    let post = await this.httpClient
      .get('http://localhost:3000/api/post/getById/' + postId)
      .toPromise();
    let ngo = await this.httpClient
      .get('http://localhost:3000/api/ngo/getById/' + post['authorNgo'])
      .toPromise();
    post['authorNgo'] = ngo;
    return post;
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
      let ngo = await this.httpClient
        .get('http://localhost:3000/api/ngo/getById/' + post['authorNgo'])
        .toPromise();
      post['authorNgo'] = ngo;
    }
    return posts;
  }

  async getPostsOrderedByOdsLikesPublishedDate() {}

  async addLike(postId: number, user: Object) {
    this.httpClient
      .put<Object>('http://localhost:3000/api/post/addLike/' + postId, {
        userId: user['id'],
        userType: this.getUserType(user),
      })
      .toPromise();
  }

  async removeLike(postId: number, user: Object) {
    this.httpClient
      .put<Object>('http://localhost:3000/api/post/removeLike/' + postId, {
        userId: user['id'],
        userType: this.getUserType(user),
      })
      .toPromise();
  }
  getUserType(user: Object): string {
    if (user['ODS']) {
      return 'registeredUser';
    } else {
      return 'ngo';
    }
  }
}
