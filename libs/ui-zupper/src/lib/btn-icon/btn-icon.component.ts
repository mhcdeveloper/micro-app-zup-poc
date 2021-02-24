import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zup-academy-btn-icon',
  templateUrl: './btn-icon.component.html',
  styleUrls: ['./btn-icon.component.css']
})
export class BtnIconComponent {
  @Input() iconNome: string;
  @Input() ativo: boolean;
  @Output() clicado = new EventEmitter();

  submit() {
    this.clicado.emit();
  }
}
