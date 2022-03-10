import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyJobsRoutingModule } from './apply-jobs-routing.module';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { ApplyJobsComponent } from './apply-jobs.component';

@NgModule({
  declarations: [ApplyFormComponent, ApplyJobsComponent],
  imports: [CommonModule, ApplyJobsRoutingModule],
})
export class ApplyJobsModule {}
