import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services';
import { Product } from '../models';

@Component({
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.scss']
})
export class ProductsComponent implements OnInit {
    public products: Product[];
    public totalProducts: number;
    public openFilter = false;
    public defaultItem: string;
    public loading = false;
    constructor(
        private productService: ProductService
    ) {}
    ngOnInit() {
        this.loading = true;
        this.productService.getAll()
            .subscribe(products => {
                this.products = products;
                this.totalProducts = this.products.length;
                this.loading = false;
            }, err => {
                console.log(err);
            });
    }
    openSelect() {
        this.openFilter = !this.openFilter;
    }
    selectOrder(elem) {
        this.defaultItem = elem.textContent;
    }
}
