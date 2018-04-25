import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromApp from '@scrty/base-store/app.reducers';
import * as fromAuth from '@scrty/auth/store/auth.reducers';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private store: Store<fromApp.IAppState>) { }

    authState: Observable<fromAuth.IAuthState>;

    ngOnInit(): void {
        this.authState = this.store.select(state => state.auth);
    }

}
