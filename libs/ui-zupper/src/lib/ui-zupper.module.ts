import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@zup-academy/material';

import { PageTitleComponent } from './page-title/page-title.component';
import { CardCursoComponent } from './card-curso/card-curso.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BtnIconComponent } from './btn-icon/btn-icon.component';
import { GridCardComponent } from './grid-card/grid-card.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [PageTitleComponent, CardCursoComponent, NavBarComponent, BtnIconComponent, GridCardComponent],
  exports: [PageTitleComponent, CardCursoComponent, NavBarComponent, BtnIconComponent, GridCardComponent],
})
export class UiZupperModule {}
