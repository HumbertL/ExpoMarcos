import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { AccountComponent } from './pages/account/account.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsCatalogComponent } from './pages/products-catalog/products-catalog.component';
import { ProductDetailComponent } from './pages/products-catalog/product-detail/product-detail.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,}, 
  {path: 'signup', component: SignUpComponent},
  {path: 'create', component: CreateProductComponent},
  {path: 'account', component: AccountComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'catalog', component: ProductsCatalogComponent},
  {path: 'catalog/product/:id', component: ProductDetailComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
