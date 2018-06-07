import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LoginComponent } from './login/login.component';
import { QueueComponent } from './queue/queue.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateAdviceComponent } from './create-advice/create-advice.component';
import {NgSelectModule} from "@ng-select/ng-select";
// import {Angular2FontawesomeModule} from "angular2-fontawesome";


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AppNavbarComponent,
    LoginComponent,
    QueueComponent,
    CreateAdviceComponent
  ],
  imports: [
    NgbModule.forRoot(),
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    // Angular2FontawesomeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
