import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuarios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
