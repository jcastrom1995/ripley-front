import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '../services';
import { Product } from '../models';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
    public openMenu = false;
    public openLogin = false;
    public openMenuRes = false;
    public cart = false;
    public wasInside = false;
    public cartCount = 0;
    public cartProducts: Product[];
    @HostListener('click')
    clickInside() {
        this.wasInside = true;
    }
    @HostListener('document:click')
    clickout() {
        if (!this.wasInside) {
          this.cart = false;
          this.openMenu = false;
          this.openMenuRes = false;
        }
        this.wasInside = false;
    }
    constructor(
        private cartService: CartService,
        private route: Router
    ) {}
    ngOnInit() {
        this.checkCart();
        this.cartService.change.subscribe(() => {
            this.checkCart();
        });
    }
    checkCart() {
        const productsId = this.cartService.getProducts();
        if (!productsId) {
            return;
        }
        this.cartCount = productsId.length;
        const products = [];
        productsId.forEach(id => {
            const index = products.findIndex(p => p.id === id);
            if (index === -1) {
                products.push({
                    id,
                    quantity: 1
                });
            } else {
                products[index].quantity += 1;
            }
        });
        this.cartService.getCart(products)
            .subscribe(prd => {
                this.cartProducts = prd;
            }, err => {
                console.log(err);
            });
    }
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
    goToCheckout() {
        if (!this.cartProducts) {
            return;
        }
        this.route.navigate(['checkout']);
    }
}
