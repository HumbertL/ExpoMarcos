import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider} from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { AccountComponent } from './pages/account/account.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { environment } from 'src/environments/environment';
import { LoginStatusDirective } from './shared/directives/login-status.directive';
import { ProductsCatalogComponent } from './pages/products-catalog/products-catalog.component';
import { ProductDetailComponent } from './pages/products-catalog/product-detail/product-detail.component';
import { AccountDialogComponent } from './pages/account/account-dialog/account-dialog.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { MatTableModule } from '@angular/material/table'  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    MenuComponent,
    CreateProductComponent,
    AccountComponent,
    CheckoutComponent,
    LoginStatusDirective,
    ProductsCatalogComponent,
    ProductDetailComponent,
    AccountDialogComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    ColorPickerModule,
    SocialLoginModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            environment.googleClient
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
