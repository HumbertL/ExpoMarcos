import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  color: string = '#2889e9'
  arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };
  selectedColor: string = 'color1';

  constructor(private _formBuilder: FormBuilder,
    private productsService: ProductsService, private router: Router) {}

  selectedFile: any = null;

  productCreation = this._formBuilder.group(
    {
      name:['', Validators.required],
      price:['', Validators.required],
      measure:['', Validators.required]
    }
  )

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;

  }

  uploadProduct(){
    const product: Product = {
      price: 3000,
      name: this.productCreation.controls['name'].value?.toString(),
      measure: this.productCreation.controls['measure'].value?.toString(),
    };
    let productId;
    console.log(product);
    this.productsService.createProduct(product).subscribe({next: value => {
      productId = value.uid;
      console.log(productId);
      console.log(this.selectedFile);
      this.productsService.uploadProductImage(productId, this.selectedFile).subscribe({next: value => {
        console.log(value);
        this.router.navigate(['']);
      },error: (error) => {
        alert('Image cannot be uploaded, please retry!');
      } });
    }, error: (mistake) => {
      alert('Idk what the fuck happened but something happened');
      console.log(mistake);
    }, })
  }


}
