import { Component, OnInit } from '@angular/core';
import { ProductService, CartService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models';

@Component({
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit {
    public product: Product;
    public products: Product[] = [];
    public loading = false;
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private cartService: CartService
    ) {}
    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe(params => {
            this.productService.get(params.id)
                .subscribe(product => {
                    this.product = product;
                }, err => {
                    console.log(err);
                });
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
                    this.loading = false;
                }, err => {
                    console.log(err);
                });
            });
    }
    addCart(id) {
        console.log(id);
        this.cartService.setProduct(id);
    }
}
