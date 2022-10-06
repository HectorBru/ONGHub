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
  private username: string;
  private items: string[];
  constructor(
    private platform: Platform,
    private timelineService: TimelineService
  ) {}

  async ngOnInit() {
    this.items = ['asdad', 'asdads', 'asdsada', 'asdasd'];
    this.user = await this.timelineService.getUsers();
    this.username = this.user['username'];
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  }
}
