import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// import { ApiService } from './api.service';
import { Dataset } from '../models';
// import { map } from 'rxjs/operators';


@Injectable()
export class DataSetService {
  constructor (
      private data: Array<Dataset> = []
    // private apiService: ApiService
  ) {}

  getAll(): Observable<Array<Dataset>> {
      return of(this.data);
    // return this.apiService.get(`/articles/${slug}/comments`)
    //   .pipe(map(data => data.comments));
  }

}
