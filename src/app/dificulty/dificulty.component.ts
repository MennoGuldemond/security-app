import { Component, OnInit } from '@angular/core';
import { ScrtyApiService } from '@scrty/api';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromApp from '@scrty/base-store/app.reducers';
import * as fromAuth from '@scrty/auth/store/auth.reducers';
import * as authActions from '@scrty/auth/store/auth.actions';

@Component({
    selector: 'scrty-dificulty',
    templateUrl: './dificulty.component.html',
    styleUrls: ['./dificulty.component.scss']
})
export class DificultyComponent implements OnInit {

    constructor(private scrtyApi: ScrtyApiService, private store: Store<fromApp.IAppState>) { }

    authState: Observable<fromAuth.IAuthState>;

    ngOnInit(): void {
        this.authState = this.store.select(state => state.auth);
    }

    setDificulty(name: string): void {
        this.scrtyApi.setDificulty(name);
        this.store.dispatch(new authActions.SetDificulty(name));
    }
}
