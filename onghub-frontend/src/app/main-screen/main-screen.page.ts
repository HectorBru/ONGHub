import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  @Input() private isLogged: boolean = localStorage.getItem('token') != null;

  constructor(private router: Router) {}

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
}
