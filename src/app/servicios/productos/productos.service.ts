import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenName } from '@angular/compiler';
import { UsuarioService } from '../usuarios/usuario.service';

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
        'Authorization': 'Bearer ' + _usuarioService.token
      })
    };
  }

  cargarProductos(url: string): any {
    console.log(this.token);
    return this.http.get( url, this.httpOptions )
    .pipe(
      map( (resp: any) => {
        console.log( resp.data.data );
        return resp;
      })
    );
  }
}
