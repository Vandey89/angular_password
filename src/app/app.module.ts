import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
