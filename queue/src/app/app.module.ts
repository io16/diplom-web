import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LoginComponent } from './login/login.component';
import { QueueComponent } from './queue/queue.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AppNavbarComponent,
    LoginComponent,
    QueueComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
