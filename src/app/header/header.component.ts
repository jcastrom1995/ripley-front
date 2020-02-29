import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    public openMenu = false;
    public openLogin = false;
    public openMenuRes = false;
    public cart = false;
    public wasInside = false;
    @HostListener('click')
    clickInside() {
        this.wasInside = true;
    }
    @HostListener('document:click')
    clickout() {
        if (!this.wasInside) {
          this.cart = false;
        }
        this.wasInside = false;
    }
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
    openCart() {
        this.cart = !this.cart;
    }
}
