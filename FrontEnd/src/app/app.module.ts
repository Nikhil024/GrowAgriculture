import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { BuyerRegisterComponent } from './buyer/buyer-register/buyer-register.component';
import { BuyerLoginComponent } from './buyer/buyer-login/buyer-login.component';
import { FarmerLoginComponent } from './farmer/farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './farmer/farmer-register/farmer-register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ApplicationRoutes} from './application-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LandingComponent,
    BuyerRegisterComponent,
    BuyerLoginComponent,
    FarmerLoginComponent,
    FarmerRegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ApplicationRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
