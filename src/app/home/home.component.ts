import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services';
import { Product } from '../models';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
    public products: Product[];
    constructor(
        private productService: ProductService
    ) {}
    ngOnInit() {
        const cart = localStorage.getItem('cart');
        if (!cart) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        this.productService.getAll()
            .subscribe(products => {
                const prd = [];
                products.forEach(product => {
                    if (prd.length >= 4) {
                        return;
                    }
                    prd.push(product);
                });
                this.products = prd;
            }, err => {
                console.log(err);
            });
    }
}
