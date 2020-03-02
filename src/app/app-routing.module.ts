import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { SuccessComponent } from './success/success.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'product/:id',
                component: ProductComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            }
        ]
    },
    {
        path: 'success',
        component: SuccessComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
