import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TimelineService } from './timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  private session: string;
  private user: Object;
  private posts: Object;
  private username: string;
  constructor(
    private platform: Platform,
    private timelineService: TimelineService
  ) {}

  async ngOnInit() {
    this.user = await this.timelineService.getUsers();
    this.posts = await this.timelineService.getPostsOfFollowedNgos();
    this.posts = this.posts['msg'];
    console.log(this.posts);
    this.username = this.user['username'];
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  }
}
