/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { Curso, api_url } from '@zup-academy/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(private httpCliente: HttpClient) {}

  listarCursos(): Observable<Curso[]> {
    return this.httpCliente.get<Curso[]>(`${api_url}/cursos`).pipe(take(1));
  }
}
