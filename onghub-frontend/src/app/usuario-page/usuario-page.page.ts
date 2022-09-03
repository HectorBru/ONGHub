import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-usuario-page',
  templateUrl: './usuario-page.page.html',
  styleUrls: ['./usuario-page.page.scss'],
})
export class UsuarioPagePage implements OnInit {
  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
