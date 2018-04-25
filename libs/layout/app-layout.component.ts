import { Component, OnInit, HostListener, ViewChild, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatSidenav } from '@angular/material';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '@scrty/base-store/app.reducers';
import * as fromUI from '@scrty/user-interface/store/user-interface.reducers';
import * as UserInterfaceActions from '@scrty/user-interface/store/user-interface.actions';

import { ITheme } from '@scrty/user-interface/models/theme.model';
import { IMenuItem } from '@scrty/user-interface/models/menu-item.model';

@Component({
    selector: 'scrty-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

    constructor(private location: Location, private store: Store<fromApp.IAppState>) { }

    uiStore: Observable<fromUI.IUserInterfaceState>;

    @ViewChild('sidenav') sidenav: MatSidenav;

    isMobileDevice: boolean = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());

    // Themes
    themes: ITheme[] = [
        { 'label': 'Default', 'name': 'default' },
        { 'label': 'Default dark', 'name': 'default-dark' }
    ];

    // Menu
    menuList: IMenuItem[] = [
        { label: 'Home', icon: 'home', route: 'home' },
        { label: 'Account', icon: 'account_circle', route: 'account' },
    ];

    ngOnInit(): void {
        this.uiStore = this.store.select(state => state.userInterface);
    }

    selectTheme(theme: ITheme): void {
        this.store.dispatch(new UserInterfaceActions.SetTheme(theme));
    }

    goBack(): void {
        this.location.back();
    }

    // Make sidebar responsive, until this is fixed by angular material.
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.isMobileDevice = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
        if (event.target.innerWidth < 500) {
            this.sidenav.close();
        }
    }

}
