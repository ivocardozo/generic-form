import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FormContainerComponent } from './form-container/form-container.component';
import { FormElementComponent } from './form-element/form-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    FormElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
