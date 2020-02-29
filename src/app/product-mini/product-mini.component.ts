import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models';

@Component({
    selector: 'app-product-mini',
    templateUrl: 'product-mini.component.html',
    styleUrls: ['product-mini.component.scss']
})

export class ProductMiniComponent implements OnInit {
    @Input() product: Product;
    constructor() { }

    ngOnInit() { }
}
