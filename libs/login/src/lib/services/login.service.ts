import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { userLogged } from '@zup-academy/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  autenticar(usuario) {
    this.gravarUsuario(usuario);
  }

  gravarUsuario(usuario) {
    localStorage.setItem(userLogged, usuario);
    this.router.navigate(['/']);
  }

  limparUsuarioDaStorage() {
    localStorage.removeItem(userLogged);
  }
}
