import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'X-Requested-With':'XMLHttpRequest'
    })
  };

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { 
    this.cargarStorage();
  }

  cargarStorage() {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage( id: string, token: string, usuario: Usuario ) {
    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  login( usuario: Usuario, recordar: boolean = false ) {
    if ( recordar ) {
      localStorage.setItem('nick', usuario.nick );
    }else {
      localStorage.removeItem('nick');
    }

    let url = URL_SERVICIOS + '/api/auth/login';
    return this.http.post( url, usuario, this.httpOptions )
    .pipe(
      map( (resp: any) => {
        this.guardarStorage( resp.user.id, resp.access_token, resp.user );
        return true;
      })
    )
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }
}
