import { Component, OnInit } from '@angular/core';
import { ExternalProfileNgoService } from './external-profile-ngo.service';

@Component({
  selector: 'app-external-profile-ngo',
  templateUrl: './external-profile-ngo.page.html',
  styleUrls: ['./external-profile-ngo.page.scss'],
})
export class ExternalProfileNgoPage implements OnInit {
  buttonValue = 1;
  orientations: string[];
  ngo: Object;
  name: string;
  constructor(private externalProfileNgoService: ExternalProfileNgoService) {}

  ngOnInit() {
    this.ngo = this.getNgo(22);
  }

  async getNgo(ngoId: number) {
    this.ngo = await this.externalProfileNgoService.getNgo(ngoId);
  }
}
