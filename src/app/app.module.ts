import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplyJobsModule } from './apply-jobs/apply-jobs.module';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: 'apply-jobs',
    loadChildren: () =>
      import('./apply-jobs/apply-jobs.module').then((m) => m.ApplyJobsModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApplyJobsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
