import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-mini',
    templateUrl: 'product-mini.component.html',
    styleUrls: ['product-mini.component.scss']
})

export class ProductMiniComponent implements OnInit {
    @Input() product: Product;
    constructor(
        private route: Router
    ) { }
    ngOnInit() { }
    goToDetail(id) {
        this.route.navigate(['product', id]);
    }
}
