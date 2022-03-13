import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyJobsRoutingModule } from './apply-jobs-routing.module';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { ApplyJobsComponent } from './apply-jobs.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplyFormComponent, ApplyJobsComponent],
  imports: [CommonModule, ApplyJobsRoutingModule, ReactiveFormsModule],
})
export class ApplyJobsModule {}
