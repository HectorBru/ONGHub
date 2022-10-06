import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  users: Object;
  credentialsAreWrong = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  goBack() {
    this.router.navigate(['start-screen']);
  }

  goForward() {
    this.router.navigate(['main-page']);
  }
  ngOnInit() {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      usernameOrEmail: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async login() {
    try {
      var user = await this.loginService.login(
        this.form.value['usernameOrEmail'],
        this.form.value['password']
      );
    } catch (e) {
      this.credentialsAreWrong = true;
    }
    localStorage.setItem('token', user['access_token']);
    if (user['access_token'] != null) {
      this.goForward();
    } else {
      this.credentialsAreWrong = true;
    }
  }
}
