import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full',  component:AppComponent },
  { path: 'test', component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
