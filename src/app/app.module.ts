import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductMiniComponent } from './product-mini/product-mini.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
// Services
import { ProductService } from './services';
// Pipes
import { MoneyFormatPipe } from './pipes/money-format';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductMiniComponent,
    FooterComponent,
    ProductComponent,
    MoneyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
