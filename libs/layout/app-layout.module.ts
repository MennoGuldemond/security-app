import { NgModule } from '@angular/core';

import { SharedModule } from '@scrty/shared';

import { AppLayoutComponent } from './app-layout.component';

@NgModule({
    declarations: [
        AppLayoutComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [],
    exports: [
        AppLayoutComponent
    ],
    bootstrap: []
})
export class AppLayoutModule { }
