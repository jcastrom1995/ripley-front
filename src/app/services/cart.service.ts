import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models';

@Injectable()
export class CartService {
    public change = new Subject();
    constructor(
        private http: HttpClient
    ) {}
    getProducts() {
        return JSON.parse(localStorage.getItem('cart'));
    }
    setProduct(id) {
        const cart: string[] = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
        localStorage.setItem('cart', JSON.stringify([
            ...cart,
            id
        ]));
        this.change.next();
    }
    getCart(products) {
        return this.http.post<Product[]>(`${environment.urlApi}products/cart`, { products });
    }
    removeProduct(id) {
        const cart: string[] = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
        const index = cart.indexOf(id);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        this.change.next();
    }
    removeAllProducts(id) {
        const cart: string[] = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
        const newCart = cart.filter(idProduct => idProduct !== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        this.change.next();
    }

}
