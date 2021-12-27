import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaphomeComponent } from './maphome.component';
import { MaphomeAuthResolver } from './maphome-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MaphomeComponent,
    resolve: {
      isAuthenticated: MaphomeAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaphomeRoutingModule {}
