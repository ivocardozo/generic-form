import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormElementTextComponent } from './form-element-text/form-element-text.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    FormElementTextComponent
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
