import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

// import { UserService } from '../core';
import { take } from 'rxjs/operators';

import { UserService } from '../core';

@Injectable()
export class MaphomeAuthResolver implements Resolve<boolean> {
  constructor(
    private router: Router,
    private userService: UserService
    // private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // return this.userService.isAuthenticated.pipe(take(1));
    return of(true)
  }
}
