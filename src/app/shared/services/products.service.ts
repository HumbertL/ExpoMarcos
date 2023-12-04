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

  getMaterialProducts(S: string) : Observable<Product[]>
  {
    let URL = environment.myApiURL + '/products';

    if(S!=='') URL = URL + '?m=' + S;

    return this.httpClient.get<Product[]>(URL);
  }

  getProductPhoto(productId: string) : Observable<any>
  {
    const file_upload_url = this.API__URL + productId + '/photo';
    return this.httpClient.get<any>(file_upload_url);
  }
  uploadProductImage(productId: string, file: File) : Observable<any> {
    const file_upload_url = this.API__URL + productId + '/upload';
    const formData = new FormData();
    formData.append('file', file);
    
    return this.httpClient.post(file_upload_url, formData);
  }
}
