import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '@scrty/shared';
import { AppLayoutModule } from '@scrty/layout';
import { AuthModule } from '@scrty/auth';

import { ScrtyApiService } from '@scrty/api';

import { routeConfig } from './routing/router-config';
import { environment } from '../environments/environment';
import * as fromApp from '@scrty/base-store/app.reducers';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DificultyComponent } from './dificulty/dificulty.component';
import { AgentDetailComponent } from './agent/agent-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DificultyComponent,
    AgentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    StoreModule.forRoot(fromApp.reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedModule,
    AppLayoutModule,
    AuthModule
  ],
  providers: [
    ScrtyApiService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
