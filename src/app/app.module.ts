import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from '@shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { WrapperComponent } from './shared/wrapper/wrapper.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavComponent, WrapperComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
