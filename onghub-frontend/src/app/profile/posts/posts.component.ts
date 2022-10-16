import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimelineService } from 'src/app/main-screen/timeline/timeline.service';
import { ExternalProfileNgoService } from '../external-profile-ngo/external-profile-ngo.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() private ngoUsername: string;
  @Input() private posts: Object;
  @Input() private ngo: Object;
  constructor(
    private externalProfileNgoService: ExternalProfileNgoService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.ngo = JSON.parse(this.route.snapshot.parent.data['ngo']);
    this.posts = await this.externalProfileNgoService.getPostsOfNgo(
      this.ngo['username']
    );
  }
}
