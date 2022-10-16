import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalProfileNgoService } from './external-profile-ngo.service';

@Component({
  selector: 'app-external-profile-ngo',
  templateUrl: './external-profile-ngo.page.html',
  styleUrls: ['./external-profile-ngo.page.scss'],
})
export class ExternalProfileNgoPage implements OnInit {
  buttonValue: number;
  orientations: string[];
  @Input() ngo: Object;
  name: string;
  constructor(
    private externalProfileNgoService: ExternalProfileNgoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let ngoUsername = this.route.snapshot.paramMap.get('ngoUsername');
    this.ngo = this.getNgo(ngoUsername).then((ngo) => (this.ngo = ngo));
    this.route.snapshot.data['ngoUsername'] = ngoUsername;
  }

  async getNgo(ngoUsername: string) {
    let ngo = await this.externalProfileNgoService.getNgoByUsername(
      ngoUsername
    );
    this.route.snapshot.data['ngo'] = JSON.stringify(ngo);
    return ngo;
  }
}
