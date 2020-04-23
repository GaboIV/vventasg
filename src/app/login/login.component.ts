import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tituloOriginal = 'Ventas G de Software G v1.3.544 - Base de datos v0.52 - Login de usuario';

  constructor(
    public router: Router,
    public _userService: UserService,
    public title: Title,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.title.setTitle( this.tituloOriginal );
    this.document.body.classList.add('bodywall');
  }

  ingresar( forma: NgForm ) {
    if ( forma.invalid ) {
      return;
    }

    let usuario = new User(null, null, forma.value.nick, forma.value.password );

    this._userService.login( usuario )
    .subscribe( 
      correcto => this.router.navigate(['/']) 
    );
  }
}
