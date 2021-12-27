import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
// import { HomeModule } from './home/home.module';
import { MaphomeModule } from './maphome/maphome.module';

import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
// import { MaphomeComponent } from './maphome/maphome.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, SplashScreenComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    MaphomeModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
