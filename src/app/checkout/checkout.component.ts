import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CartService } from '../services';
import { Product } from '../models';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    public pay: FormGroup;
    public products: Product[];
    public subtotal = 0;
    public totalDiscount = 0;
    public loading = false;
    constructor(
        private fb: FormBuilder,
        private cartService: CartService,
        private route: Router
    ) {}
    ngOnInit() {
        this.loading = true;
        this.pay = this.fb.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            rut: ['', [Validators.required, Validators.pattern('^[0-9]{7,8}-[0-9Kk]{1}$')]],
            cardNumber: ['', Validators.required],
            cvv: ['', Validators.required]
        });
        this.cartService.getCart(this.countProducts())
            .subscribe(products => {
                this.products = products;
                if (this.products.length <= 0) {
                    this.route.navigate(['home']);
                }
                this.products.forEach(product => {
                    this.subtotal += product.maxPrice * product.quantity;
                    this.totalDiscount += product.minPrice * product.quantity;
                });
                this.loading = false;
            }, err => {
                this.route.navigate(['home']);
            });
    }
    payItems(payForm, btn) {
        const btnContent = btn.textContent;
        btn.textContent = 'Realizando pago....';
        btn.disabled = true;
        if (this.pay.invalid) {
            return;
        }
        setTimeout(() => {
            this.route.navigate(['success']);
        }, 2000);
    }
    countProducts() {
        const productsId = this.cartService.getProducts();
        if (!productsId) {
            return;
        }
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
        return products;
    }
}
