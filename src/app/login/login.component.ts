import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuarios/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
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
