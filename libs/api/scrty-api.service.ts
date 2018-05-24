import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Store } from '@ngrx/store';

import * as fromApp from '@scrty/base-store/app.reducers';
import * as fromAuth from '@scrty/auth/store/auth.reducers';
import * as authActions from '@scrty/auth/store/auth.actions';
import { IBaseResponse } from '@scrty/api/models/base-response.model';

@Injectable()
export class ScrtyApiService {

    constructor(private http: HttpClient, private store: Store<fromApp.IAppState>) {
        // Get auth state from store
        this.authState = store.select(state => state.auth);
    }

    private baseUrl = 'http://localhost:52488/api/';

    private authState: Observable<fromAuth.IAuthState>;

    login(username: string, password: string): void {
        this.http.post(this.baseUrl + 'login?username=' + username + '&password=' + password, {})
            .subscribe((response: IBaseResponse<any>) => {
                if (response.succeeded === true) {
                    this.store.dispatch(new authActions.SetToken(response.data.authToken));
                }
            });
    }

    setDificulty(name: string): void {
        this.http.post(this.baseUrl + 'Difficult/SetDifficulty?difficultyName=' + name, {}).subscribe((response: IBaseResponse<any>) => {
            if (response.succeeded === true) {
                this.store.dispatch(new authActions.SetDificulty(name));
            }
        });
    }

    getAgentData(username: string): Observable<any> {
        return this.authState.map(state => {
            const authHeader = new HttpHeaders({'Authorization': state.token});
            return this.http.get(this.baseUrl + 'Member/getbyid?username=' + username, { headers: authHeader }).subscribe();
        });
    }

}
