import { LoginService } from './modulos/login/login.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/login.component';
import { HomeComponent } from './modulos/nucleo/home/home.component';
import { HeaderComponent } from './modulos/nucleo/header/header.component';
import { LoginModule } from './modulos/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    LoginModule,
    BrowserModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
