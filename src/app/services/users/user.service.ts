import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { URL_AUTH } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User;
  token: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  };

  constructor(
    public http: HttpClient,
    public router: Router,
  ) {
    this.getStorage();
  }

  getStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }

  storeStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  logout() {
    this.user = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }

  login(user: User, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('nick', user.nick);
    } else {
      localStorage.removeItem('nick');
    }

    let url = URL_AUTH + '/login';
    return this.http.post(url, user, this.httpOptions)
      .pipe(
        map((resp: any) => {
          this.storeStorage(resp.user.id, resp.access_token, resp.user);
          return true;
        })
      )
  }

  verifyLogged() {
    return (this.token.length > 5) ? true : false;
  }
}
