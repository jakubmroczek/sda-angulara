import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from './api.service';
import { Dataset } from '../models';
// import { map } from 'rxjs/operators';


@Injectable()
export class DataSetService {
  constructor (
      private apiService: ApiService
  ) {}

  private data: Array<Dataset> = [
    new Dataset("1234"),
    new Dataset("salkdf"),
    new Dataset("s_df"),
    new Dataset("sa3fkdf"),
    new Dataset("skdf"),
    new Dataset("sa2df"),
    new Dataset("salkf"),
  ]

  getAll(): Observable<Array<Dataset>> {
      return of(this.data);
    // return this.apiService.get(`/articles/${slug}/comments`)
    //   .pipe(map(data => data.comments));
  }

}
