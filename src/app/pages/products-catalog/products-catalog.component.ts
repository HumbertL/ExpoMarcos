import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent implements OnInit{
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getMaterialProducts().
    subscribe({next: (value: Product[])=> {
      this.products = value;
      console.log(this.products);
      for(let i = 0; i <this.products.length; i++) {
        this.productsService.getProductPhoto(this.products[i].uid!)
        .subscribe({next: (response: any)=>
        {
          this.products[i].photo = response;
          console.log(this.products[i].photo);
        }});
      }
    }});
    

  }
}
