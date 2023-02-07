import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './store/example.reducer';
import { FormsModule } from "@angular/forms";
import { ExampleEffects } from "./store/example.effects";
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './modal/modal.component';
import { StoreWindowComponent } from './store-window/store-window.component';

import { OnlineStatusModule } from 'ngx-online-status';

@NgModule({
  "declarations": [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ModalComponent,
    StoreWindowComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({example: fromReducer.reducer}),
    EffectsModule.forRoot([ExampleEffects]),
    FormsModule,
    OnlineStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
