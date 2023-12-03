import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { environment } from 'src/environments/environment';
import { io, Socket } from 'socket.io-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent implements OnInit{
  products: Product[] = [];
  socket: Socket;
  cart: Product[] = [];
  constructor(private productsService: ProductsService, private router: Router) {
     this.socket = io(environment.myApiURL);
  }

  ngOnInit(): void {
    this.productsService.getMaterialProducts().
    subscribe({next: (value: Product[])=> {
      this.products = value;
      console.log(this.products);
      for(let i = 0; i <this.products.length; i++) {
        let imageLink = this.productsService.API__URL + this.products[i].uid + `/photo`;
        this.products[i].photo = imageLink;
      }
    }});
    
    

  }




  addToCart(product: Product): void {
    
    this.cart.push(product);

   
    localStorage.setItem('cart', JSON.stringify(this.cart));

    
    console.log('Producto agregado al carrito:', product);
  }

  info_product(product: Product): void{
    localStorage.setItem('product', JSON.stringify(product));
    const currentRoute = this.router.routerState.snapshot.url;
    const newRoute = currentRoute + `/product/${product.uid}`;

    this.router.navigate([newRoute]);
  }


}
