import { Injectable } from '@angular/core';

import { userLogged } from '@zup-academy/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioEstaAutenticado() {
    return this.buscarUsuarioDaStorage();
  }

  buscarUsuarioDaStorage(): boolean {
    const isUserLogged = localStorage.getItem(userLogged);
    if (!isUserLogged) return false;
    return true;
  }
}
