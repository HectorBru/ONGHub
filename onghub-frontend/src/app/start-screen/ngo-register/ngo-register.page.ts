import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfilePhotoOptionComponent } from 'src/app/photo/photo.component';
import { UserRegisterService } from '../user-register/user-register.service';
import { NgoRegisterService } from './ngo-register.service';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.page.html',
  styleUrls: ['./ngo-register.page.scss'],
})
export class NgoRegisterPage implements OnInit {
  form: FormGroup;
  users: Object;
  influenceArea: string;
  orientation: string[];
  profilePicture: string;
  userExists: boolean;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ngoRegisterService: NgoRegisterService,
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
      mission: ['', [Validators.required]],
      webPage: ['', [Validators.required]],
      influenceArea: this.influenceArea,
      orientation: this.orientation,
      profilePicture: this.profilePicture,
    });
  }

  handleChangeOrientation(ev) {
    this.orientation = ev.target.value;
  }

  handleChangeInfluenceArea(ev) {
    this.influenceArea = ev.target.value;
  }

  async register() {
    try {
      var user = await this.ngoRegisterService.register(
        this.form.value['name'],
        this.form.value['username'],
        this.form.value['password'],
        this.influenceArea,
        this.orientation,
        this.form.value['mission'],
        this.form.value['webPage'],
        this.form.value['email'],
        this.form.value['profilePicture']
      );
    } catch (e) {
      if (e.error['message'] === 'User already exists.') {
        this.userExists = true;
      }
    }
    localStorage.setItem('token', user['access_token']);
    console.log(user['access_token']);
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
