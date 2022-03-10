import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';

const routes: Routes = [{ path: '', component: ApplyFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyJobsRoutingModule {}
