import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  imageUrl: string = ''; 
  id: string = '';

  product: Product = {

  };

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
    this.imageUrl = environment.myApiURL + '/products/' + this.id + '/photo';
    const productString = localStorage.getItem('product');
    if (productString) {
      this.product = JSON.parse(productString) as Product;
      console.log("ayudame dios: ", this.product);
    }
  }

  btn_return(){
    // Obtén la ruta actual
    const currentRoute = this.router.routerState.snapshot.url;

  // Elimina el segmento `/product/uid` de la ruta
    const newRoute = currentRoute.replace('/product/' + this.product.uid, '');

  // Navega a la nueva ruta
    this.router.navigate([newRoute]);
  }
}
