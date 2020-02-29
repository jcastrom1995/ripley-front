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
        this.productService.getAll()
            .subscribe(products => {
                this.products = products;
            }, err => {
                console.log(err);
            });
    }
}
