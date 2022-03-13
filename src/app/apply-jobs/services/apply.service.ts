import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApplyService {
  constructor(private http: HttpClient) {}

  applyJobs(data) {
    const url = `https://apply-jobs-4aef6-default-rtdb.firebaseio.com/jobs.json`;
    return this.http.post(url, data).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
