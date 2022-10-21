import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { TimelineService } from 'src/app/main-screen/timeline/timeline.service';
import { OwnProfileNgoService } from './own-profile-ngo.service';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-own-profile-ngo',
  templateUrl: './own-profile-ngo.page.html',
  styleUrls: ['./own-profile-ngo.page.scss'],
})
export class OwnProfileNgoPage implements OnInit {
  tabButtonValue: number;
  followButtonValue: number;
  orientations: string[];
  @Input() ngo: Object;

  @ViewChild(IonModal) modal: IonModal;
  @Input() modalUser: Object;
  username: string;
  name: string;
  email: string;
  constructor(
    private ownProfileNgoService: OwnProfileNgoService,
    private timelineService: TimelineService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let ngoUsername = this.route.snapshot.paramMap.get('ngoUsername');
    this.ngo = this.getNgo(ngoUsername).then((ngo) => {
      this.ngo = ngo;
      this.modalUser = { ...this.ngo };
    });
    let ngoSession = this.getUser().then((ngo) => (ngoSession = ngo));
    this.route.snapshot.data['ngoUsername'] = ngoUsername;
  }

  async getNgo(ngoUsername: string) {
    let ngo = await this.ownProfileNgoService.getNgoByUsername(ngoUsername);
    this.route.snapshot.data['ngo'] = JSON.stringify(ngo);
    return ngo;
  }

  async getUser() {
    return await this.timelineService.getUsers();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  async onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.ngo = { ...this.modalUser };
      this.route.snapshot.data['ngo'] = JSON.stringify(this.ngo);
      // this.ownProfileUserService.updateUser(
      //   this.user['id'],
      //   this.user['username'],
      //   this.user['name'],
      //   this.user['email']
      // );
      // let token = await this.login().then((value) => (token = value));
      // localStorage.setItem('token', token['access_token']);
    } else {
      this.modalUser = { ...this.ngo };
    }
  }
}
