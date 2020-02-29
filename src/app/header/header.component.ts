import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    public openMenu = false;
    public openLogin = false;
    public openMenuRes = false;
    constructor() {}
    toggleMenu() {
        this.openMenu = !this.openMenu;
    }
    toggleLogin() {
        this.openLogin = !this.openLogin;
    }
    openMenuResponsive() {
        this.openMenuRes = !this.openMenuRes;
    }
}
