import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fill-information',
  templateUrl: './fill-information.page.html',
  styleUrls: ['./fill-information.page.scss'],
})
export class FillInformationPage implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
      author: [''],
    });
  }

  async goToTagsAndODS() {
    let post = this.form.value;
    this.route.snapshot.data['post'] = JSON.stringify(post);
    this.router.navigate(['tags-and-ods']);
  }
}
