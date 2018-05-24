import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromApp from '@scrty/base-store/app.reducers';
import * as fromAuth from '@scrty/auth/store/auth.reducers';
import * as authActions from '@scrty/auth/store/auth.actions';
import { ScrtyApiService } from '@scrty/api';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private store: Store<fromApp.IAppState>, private scrtyApi: ScrtyApiService) { }

    authState: Observable<fromAuth.IAuthState>;

    username = '';
    password = '';

    ngOnInit(): void {
        this.authState = this.store.select(state => state.auth);
    }

    login(): void {
        // console.log(this.username + ' - ' + this.password);
        this.scrtyApi.login(this.username, this.password);
    }

    logout(): void {
        this.username = '';
        this.password = '';
        this.store.dispatch(new authActions.Logout());
    }

}
