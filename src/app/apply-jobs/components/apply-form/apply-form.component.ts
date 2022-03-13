import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyService } from 'app/apply-jobs/services/apply.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css'],
})
export class ApplyFormComponent implements OnInit {
  graduated = true;
  applyForm: FormGroup;
  isSubmit = false;
  constructor(
    private applyJopsSer: ApplyService,
    private formBuild: FormBuilder
  ) {
    this.applyForm = this.formBuild.group({
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      category: ['', Validators.required],
      experience: ['', Validators.required],
      github: ['', Validators.required],
      linkedIn: ['', Validators.required],
      cv_url: ['', Validators.required],
      education_status: ['', Validators.required],
      graduated_year: [],
      university: ['', Validators.required],
      qualification: [],
      grade: [],
    });
  }

  ngOnInit(): void {}

  onChanageStatus(status: string) {
    this.graduated = status == 'graduated' ? true : false;
  }
  onSubmit() {
    this.isSubmit = true;
    this.applyJopsSer.applyJobs(this.applyForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get f() {
    return this.applyForm.controls;
  }
}
