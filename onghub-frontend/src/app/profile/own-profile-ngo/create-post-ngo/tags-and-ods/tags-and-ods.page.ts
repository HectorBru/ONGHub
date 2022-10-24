import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-and-ods',
  templateUrl: './tags-and-ods.page.html',
  styleUrls: ['./tags-and-ods.page.scss'],
})
export class TagsAndODSPage implements OnInit {
  tags: string[];
  ODS: string[];
  constructor() {}

  ngOnInit() {
    this.tags = ['asd', 'asd', 'asd', 'asd', 'asd'];
    this.ODS = ['asd', 'asd'];
  }
}
