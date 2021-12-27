import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig, TagsService, UserService } from '../core';

import { DataSetService, Dataset } from '../core'

@Component({
  selector: 'app-home-page',
  templateUrl: './maphome.component.html',
  styleUrls: ['./maphome.component.css']
})
export class MaphomeComponent implements OnInit {
  constructor(
    private router: Router,
    private tagsService: TagsService,
    private userService: UserService,

    // new stuff
    private dataSetService: DataSetService
  ) {}

  isAuthenticated: boolean;
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };
  tags: Array<string> = [];
  tagsLoaded = false;

  // new stuff
  datasets : Array<Dataset> = []
  heroes: String[] = [
    'fo', 'bar,', 'muka', 'przykra'
  ];
  
  ngOnInit() {
    // TODO: Tutaj trzeba pobrać dane z serwisys
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        // set the article list accordingly
        if (authenticated) {

          this.dataSetService.getAll().subscribe(datasets => {
            this.datasets = datasets
          });

          // this.setListTo('feed');
        } else {
          // this.setListTo('all');
        }
      }
    );

    // this.tagsService.getAll()
    // .subscribe(tags => {
      // this.tags = tags;
      // this.tagsLoaded = true;
    // });
  }

  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }
}
