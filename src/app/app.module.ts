import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@scrty/shared';
import { AppLayoutModule } from '@scrty/layout';

import * as fromApp from '@scrty/base-store/app.reducers';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // TODO: Add routes in a router.module.ts
    StoreModule.forRoot(fromApp.reducers),
    SharedModule,
    AppLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
