import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@scrty/material';
import { NotFoundComponent } from '@scrty/shared/not-found/not-found.component';

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule
    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule,
        NotFoundComponent
    ]
})
export class SharedModule { }
