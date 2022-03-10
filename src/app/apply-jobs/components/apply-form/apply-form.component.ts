import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css'],
})
export class ApplyFormComponent implements OnInit {
  graduated = true;

  constructor() {}

  ngOnInit(): void {}

  onChanageStatus(status: string) {
    this.graduated = status == 'graduated' ? true : false;
  }
}
