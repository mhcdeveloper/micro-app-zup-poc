import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Curso } from '@zup-academy/interfaces';

@Component({
  selector: 'zup-academy-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent {
  @Input() curso: Curso;
  @Output() cursoAtualizado = new EventEmitter();

  atualizarCurso(idCurso, acao) {
    this.cursoAtualizado.emit({ idCurso, acao });
  }
}
