import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalProfileNgoService } from '../external-profile-ngo.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  @Input() ngo: Object;
  constructor(
    private externalProfileNgoService: ExternalProfileNgoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ngo = JSON.parse(this.route.snapshot.parent.data['ngo']);
    console.log(this.ngo);
  }

  async getNgo(ngoUsername: string) {
    let ngo = await this.externalProfileNgoService.getNgoByUsername(
      ngoUsername
    );
    return ngo;
  }
}
