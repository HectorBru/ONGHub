import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TimelineService } from './timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  private user: Object;
  private posts: Object;
  private postUsername: string;
  constructor(
    private platform: Platform,
    private timelineService: TimelineService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.user = await this.timelineService.getUsers();
    } else this.user = null;
    this.posts = await this.timelineService.getPostsOfFollowedNgos();
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Cant go back!');
    });
    let postsArray: Object[] = Object.entries(this.posts);
  }

  async like(postId: number) {
    let post = await this.timelineService.getById(postId);
    let userType = this.timelineService.getUserType(this.user);
    if (userType == 'ngo') {
      let ngoThatLiked: number[] = post['ngoThatLiked'];
      if (ngoThatLiked.includes(this.user['id'])) {
        this.timelineService.removeLike(postId, this.user);
      } else {
        this.timelineService.addLike(postId, this.user);
      }
    } else if (userType == 'registeredUser') {
      let registeredUserThatLiked: number[] = post['registeredUserThatLiked'];
      if (registeredUserThatLiked.includes(this.user['id'])) {
        this.timelineService.removeLike(postId, this.user);
      } else {
        this.timelineService.addLike(postId, this.user);
      }
    }
    let postsArray: Object[] = Object.entries(this.posts);
    for (let i = 0; i < postsArray.length; i++) {
      let post = postsArray[i][1];
      if (post['id'] == postId) {
        this.posts[i] = await this.timelineService.getById(post['id']);
      }
    }
  }

  goToExternalNgoProfile() {
    this.router.navigate([
      'external-profile-ngo',
      { ngoUsername: this.postUsername },
    ]);
  }
}
