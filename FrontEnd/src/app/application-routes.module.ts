import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {BuyerLoginComponent} from './buyer/buyer-login/buyer-login.component';
import {BuyerRegisterComponent} from './buyer/buyer-register/buyer-register.component';
import {FarmerLoginComponent} from './farmer/farmer-login/farmer-login.component';
import {FarmerRegisterComponent} from './farmer/farmer-register/farmer-register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes  = [
  {path: '', component: LandingComponent},
  { path: 'buyer' , children: [
      {path: 'login', component: BuyerLoginComponent},
      {path: 'register', component: BuyerRegisterComponent}
    ]},
  { path: 'farmer' , children: [
      {path: 'login', component: FarmerLoginComponent},
      {path: 'register', component: FarmerRegisterComponent}
    ]},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class ApplicationRoutes {

}
