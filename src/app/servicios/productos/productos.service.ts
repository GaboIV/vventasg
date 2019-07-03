import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenName } from '@angular/compiler';
import { UsuarioService } from '../usuarios/usuario.service';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService { 

  token: String;
  httpOptions: any;
  
  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + _usuarioService.token,
      })
    };
  }

  cargarProductos(url: string): any {
    console.log(this.httpOptions);
    return this.http.get( url, this.httpOptions )
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  cargarUnidades(): any {
    const url = URL_SERVICIOS + '/api/unidades'
    return this.http.get( url, this.httpOptions )
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  buscarProductos( dato: any ): Observable<any> {
    var data = {
      'dato': dato
    };
    const url = URL_SERVICIOS + '/api/busqueda/productos'
    return this.http.post( url, data, this.httpOptions )
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  actualizarProducto(producto: any): any {

    const url = URL_SERVICIOS + '/api/productos/' + producto.id;
    return this.http.put( url, producto, this.httpOptions )
    .pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }
}
