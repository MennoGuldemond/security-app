import { Routes } from '@angular/router';
import { AuthGuard } from '@scrty/auth/guards/auth-guard.service';
import { NotFoundComponent } from '@scrty/shared/not-found/not-found.component';
import { LoginComponent } from '@scrty/auth/login/login.component';

import { HomeComponent } from '../home/home.component';
import { DificultyComponent } from '../dificulty/dificulty.component';
import { AgentDetailComponent } from '../agent/agent-detail.component';

export const routeConfig: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dificulty', component: DificultyComponent },
    { path: 'agent', component: AgentDetailComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
