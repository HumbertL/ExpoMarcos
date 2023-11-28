import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { environment } from 'src/environments/environment';

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
        let imageLink = this.productsService.API__URL + this.products[i].uid + `/photo`;
        this.products[i].photo = imageLink;
      }
    }});
    

  }
}
