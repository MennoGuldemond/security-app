import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as fromApp from '@scrty/base-store/app.reducers';
import * as fromAuth from '../store/auth.reducers';
import * as AuthActions from '../store/auth.actions';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromApp.IAppState>, private router: Router) { }

    authState: Observable<fromAuth.IAuthState>;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        this.authState = this.store.select(x => x.auth);

        return this.authState.map(x => {
            if (x.isAuthenticated === true) {
                return true;
            } else {
                this.router.navigate(['login']);
                return false;
            }
        });
    }

}
