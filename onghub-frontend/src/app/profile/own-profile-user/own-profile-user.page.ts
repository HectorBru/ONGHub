import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { TimelineService } from 'src/app/main-screen/timeline/timeline.service';
import { OwnProfileUserService } from './own-profile-user.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { LoginService } from 'src/app/start-screen/login/login.service';
@Component({
  selector: 'app-own-profile-user',
  templateUrl: './own-profile-user.page.html',
  styleUrls: ['./own-profile-user.page.scss'],
})
export class OwnProfileUserPage implements OnInit {
  tabButtonValue: number = -1;
  followButtonValue: number;
  orientations: string[];
  @Input() user: Object;

  @ViewChild(IonModal) modal: IonModal;
  @Input() modalUser: Object;
  username: string;
  name: string;
  email: string;

  constructor(
    private timelineService: TimelineService,
    private ownProfileUserService: OwnProfileUserService,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let userUsername = this.route.snapshot.paramMap.get('userUsername');
    this.user = this.getRegisteredUser(userUsername).then((user) => {
      this.user = user;
      this.modalUser = { ...this.user };
    });
    let userSession = this.getUser().then((user) => (userSession = user));
    this.route.snapshot.data['userUsername'] = userUsername;
  }

  async getRegisteredUser(userUsername: string) {
    let user = await this.ownProfileUserService.getRegisteredUserByUsername(
      userUsername
    );
    this.route.snapshot.data['user'] = JSON.stringify(user);
    return user;
  }

  async getUser() {
    return await this.timelineService.getUsers();
  }

  fillInitialForm(user: Object) {
    this.name = user['name'];
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
      this.user = { ...this.modalUser };
      // this.ownProfileUserService.updateUser(
      //   this.user['id'],
      //   this.user['username'],
      //   this.user['name'],
      //   this.user['email']
      // );
      // let token = await this.login().then((value) => (token = value));
      // localStorage.setItem('token', token['access_token']);
    } else {
      this.modalUser = { ...this.user };
    }
  }

  async login() {
    return await this.loginService.login(this.user['username'], 'password123');
  }
}
