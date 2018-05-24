import { NgModule } from '@angular/core';
import { LoginComponent } from '@scrty/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@scrty/shared';

import { AuthGuard } from './guards/auth-guard.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        AuthGuard
    ],
    exports: [
        LoginComponent
    ]
})
export class AuthModule { }
