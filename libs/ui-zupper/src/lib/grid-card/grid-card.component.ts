import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Curso } from '@zup-academy/interfaces';

@Component({
  selector: 'zup-academy-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent {
  @Input() curso: Curso;
  @Output() cursoAtualizado = new EventEmitter();

  atualizarCurso(idCurso, acao) {
    this.cursoAtualizado.emit({ idCurso, acao });
  }
}
