import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API__URL = environment.myApiURL + '/products/';

  constructor(private httpClient: HttpClient) { }

  createProduct(productToUpload: Product) : Observable<any>
  {
    return this.httpClient.post<Product>(this.API__URL, productToUpload);


  }

  uploadProductImage(productId: string, file: File) : Observable<any> {
    const file_upload_url = this.API__URL + productId + '/upload';
    const formData = new FormData();
    formData.append('file', file);
    
    return this.httpClient.post(file_upload_url, formData);
  }
}
