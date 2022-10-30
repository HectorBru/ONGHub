import {
  Component,
  OnInit,
  ɵisDefaultChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimelineService } from 'src/app/main-screen/timeline/timeline.service';
import { OwnProfileNgoService } from '../../own-profile-ngo.service';

@Component({
  selector: 'app-tags-and-ods',
  templateUrl: './tags-and-ods.page.html',
  styleUrls: ['./tags-and-ods.page.scss'],
})
export class TagsAndODSPage implements OnInit {
  tags: string[] = [];
  ODS: string[] = [];
  tag: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ownProfileNgoService: OwnProfileNgoService,
    private timelineService: TimelineService
  ) {}

  ngOnInit() {}

  addTag() {
    if (this.tags.length == 5) {
      return;
    }
    this.tags.push(this.tag);
    console.log(this.tags);
  }

  deleteTag(i: number) {
    this.tags.splice(i, 1);
  }

  deleteODS(i: number) {
    this.ODS.splice(i, 1);
  }

  handleChange(ev) {
    if (this.ODS.length >= 5) {
      return;
    }
    this.ODS = ev.target.value;
  }

  async submit() {
    let user = await this.timelineService.getUsers();
    let post = JSON.parse(this.route.snapshot.paramMap.get('post'));
    post['ODS'] = this.ODS;
    post['tags'] = this.tags;
    let authorNgo = await this.timelineService.getUsers();
    post['authorNgo'] = authorNgo['id'];
    this.ownProfileNgoService.createPost(post);
    this.router.navigate([
      'own-profile-ngo',
      { ngoUsername: user['username'] },
    ]);
  }
}
