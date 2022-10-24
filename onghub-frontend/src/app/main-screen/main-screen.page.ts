import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { TimelineService } from './timeline/timeline.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  showInitialText: boolean = true;
  @Input() private isLogged: boolean;
  tabButtonValue: number = -1;
  constructor(
    private router: Router,
    private timelineService: TimelineService
  ) {}

  ngOnInit() {
    this.isLogged = localStorage.getItem('token') != null;
  }

  moveLogin() {
    this.router.navigate(['login']);
  }

  moveRegisterNgo() {
    this.router.navigate(['ngo-register']);
  }

  moveRegisterUser() {
    this.router.navigate(['user-register']);
  }

  closeSession() {
    localStorage.removeItem('token');
    this.router.navigate(['start-screen']);
  }

  async reloadAngGoToTimeline() {
    await this.router.navigate(['timeline']);
    location.reload();
  }

  async showProfile() {
    let user = await this.timelineService.getUsers();
    let userType: string = this.timelineService.getUserType(user);
    if (userType === 'registeredUser') {
      this.router.navigate([
        'own-profile-user',
        { userUsername: user['username'] },
      ]);
    } else if (userType === 'ngo') {
      this.router.navigate([
        'own-profile-ngo',
        { ngoUsername: user['username'] },
      ]);
    }
  }

  ionViewWillEnter() {
    this.isLogged = localStorage.getItem('token') != null;
  }
}
