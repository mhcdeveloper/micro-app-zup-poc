import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { userLogged } from '@zup-academy/interfaces';

@Component({
  selector: 'zup-academy-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem(userLogged);
    this.router.navigate(['/login']);
  }
}
