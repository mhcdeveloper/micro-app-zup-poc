import { Component, OnInit } from '@angular/core';

import { Curso } from '@zup-academy/interfaces';
import { CursosService } from './services/cursos.service';

@Component({
  selector: 'zup-academy-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  mostrarGrid = true;

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.cursosService
      .listarCursos()
      .subscribe((listaCursos) => (this.cursos = listaCursos));
  }

  cursoAtualizado(event) {
    const { idCurso, acao } = event;
    this.cursos = this.cursos.map((curso) => {
      if (curso.id === idCurso) {
        curso.situacao = acao;
      }
      return curso;
    });
  }

  alterarGrid() {
    this.mostrarGrid = !this.mostrarGrid;
  }
}
