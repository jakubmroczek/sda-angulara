import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaphomeComponent } from './maphome.component';
import { MaphomeAuthResolver } from './maphome-auth-resolver.service';
import { SharedModule } from '../shared';
import { MaphomeRoutingModule } from './maphome-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MaphomeRoutingModule
  ],
  declarations: [
    MaphomeComponent
  ],
  providers: [
    MaphomeAuthResolver
  ]
})
export class MaphomeModule {}
