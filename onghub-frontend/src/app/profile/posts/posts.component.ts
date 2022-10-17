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
    private timelineService: TimelineService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.ngo = JSON.parse(this.route.snapshot.parent.data['ngo']);
    this.posts = await this.externalProfileNgoService.getPostsOfNgo(
      this.ngo['username']
    );
  }

  async like(postId: number) {
    let post = await this.timelineService.getById(postId);
    let userType = this.timelineService.getUserType(this.ngo);
    if (userType == 'ngo') {
      let ngoThatLiked: number[] = post['ngoThatLiked'];
      if (ngoThatLiked.includes(this.ngo['id'])) {
        this.timelineService.removeLike(postId, this.ngo);
      } else {
        this.timelineService.addLike(postId, this.ngo);
      }
    } else if (userType == 'registeredUser') {
      let registeredUserThatLiked: number[] = post['registeredUserThatLiked'];
      if (registeredUserThatLiked.includes(this.ngo['id'])) {
        this.timelineService.removeLike(postId, this.ngo);
      } else {
        this.timelineService.addLike(postId, this.ngo);
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
}
