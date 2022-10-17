import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimelineService } from 'src/app/main-screen/timeline/timeline.service';
import { ExternalProfileNgoService } from './external-profile-ngo.service';

@Component({
  selector: 'app-external-profile-ngo',
  templateUrl: './external-profile-ngo.page.html',
  styleUrls: ['./external-profile-ngo.page.scss'],
})
export class ExternalProfileNgoPage implements OnInit {
  tabButtonValue: number;
  followButtonValue: number;
  orientations: string[];
  @Input() ngo: Object;
  name: string;

  constructor(
    private externalProfileNgoService: ExternalProfileNgoService,
    private timelineService: TimelineService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let ngoUsername = this.route.snapshot.paramMap.get('ngoUsername');
    this.ngo = this.getNgo(ngoUsername).then((ngo) => (this.ngo = ngo));
    let userSession = this.getUser().then((user) => (userSession = user));
    console.log(userSession);
    this.route.snapshot.data['ngoUsername'] = ngoUsername;
  }

  async getNgo(ngoUsername: string) {
    let ngo = await this.externalProfileNgoService.getNgoByUsername(
      ngoUsername
    );
    this.route.snapshot.data['ngo'] = JSON.stringify(ngo);
    return ngo;
  }

  async follow() {
    let user = await this.timelineService.getUsers();
    let res = await this.externalProfileNgoService.follow(
      user['id'],
      this.ngo['id']
    );
    if (res === 'followed') {
      this.followButtonValue = 0;
    } else this.followButtonValue = 1;
  }

  async getUser() {
    return await this.timelineService.getUsers();
  }
}
