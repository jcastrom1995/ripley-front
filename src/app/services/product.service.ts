import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models';

@Injectable()
export class ProductService {
    constructor(
        private http: HttpClient
    ) {}
    getAll() {
        return this.http.get<Product[]>(`${environment.urlApi}products`);
    }
}
