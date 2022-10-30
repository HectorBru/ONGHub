import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSelect, ModalController } from '@ionic/angular';
import { ProfilePhotoOptionComponent } from '../../photo/photo.component';
import { UserRegisterService } from './user-register.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {
  form: FormGroup;
  users: Object;
  ODS: string[];
  profilePicture: string;
  userExists: boolean;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userRegisterService: UserRegisterService,
    private modalController: ModalController
  ) {}
  goBack() {
    this.router.navigate(['start-screen']);
  }

  goForward() {
    this.router.navigate(['main-screen']);
  }

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: [''],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$'),
          Validators.minLength(6),
        ],
      ],
      ODS: this.ODS,
      profilePicture: this.profilePicture,
    });
  }

  handleChange(ev) {
    this.ODS = ev.target.value;
    console.log(this.ODS);
  }

  async register() {
    try {
      console.log('SDFNDSLGNASFNAIGSGFSGIDSJFHDFSGOSDG**************');
      var user = await this.userRegisterService.register(
        this.form.value['name'],
        this.form.value['username'],
        this.form.value['password'],
        this.ODS,
        this.form.value['email'],
        this.form.value['profilePicture']
      );
    } catch (e) {
      let message;
      if (e instanceof Error) message = e.message;
      else message = String(e);
      console.log({ message });
      if (e.error['message'] === 'User already exists.') {
        this.userExists = true;
      }
    }
    localStorage.setItem('token', user['access_token']);
    if (user['access_token'] != null) {
      this.goForward();
    }
  }

  async openOptionSelection() {
    const modal = await this.modalController.create({
      component: ProfilePhotoOptionComponent,
      cssClass: 'transparent-modal',
    });

    modal.onDidDismiss().then((res) => {
      console.log(res);
    });
    return await modal.present();
  }
}
