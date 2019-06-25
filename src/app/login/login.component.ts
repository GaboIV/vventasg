import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuarios/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tituloOriginal = 'Ventas G de Software G v1.3.544 - Base de datos v0.52 - Login de usuario';

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService,
    public title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle( this.tituloOriginal );
  }

  ingresar( forma: NgForm ) {
    if ( forma.invalid ) {
      return;
    }

    let usuario = new Usuario(null, null, forma.value.nick, forma.value.password );

    this._usuarioService.login( usuario )
                  .subscribe( correcto => this.router.navigate(['/'])  );

  }

}
