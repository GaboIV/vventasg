import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '../users/user.service';
import { URL_PRODUCT, URL_BRAND, URL_GROUP, URL_UNIT } from 'src/app/config/config';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  token: String;
  httpOptions: any;

  constructor(
    public http: HttpClient,
    public _usuarioService: UserService,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _usuarioService.token,
      })
    };
  }

  getProducts(page: number): any {

    const url = "http://localhost:3000/api/products";

    return this.http.get(url, this.httpOptions)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  getUnits(): any {
    const url = URL_UNIT;
    return this.http.get(url, this.httpOptions)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  searchProducts(dato: any): Observable<any> {
    var data = {
      'dato': dato
    };

    const url = URL_PRODUCT + '/search'

    return this.http.post(url, data, this.httpOptions)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  updateProduct(product: Product): any {
    const url = URL_PRODUCT + '/' + product.id;
    return this.http.put(url, product, this.httpOptions)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  getBrands(): any {
    const url = URL_BRAND;
    return this.http.get(url, this.httpOptions)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  getGroups(): any {
    const url = URL_GROUP;
    return this.http.get(url, this.httpOptions)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

}
