/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiZupperModule } from '@zup-academy/ui-zupper';

import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos.routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CursosRoutingModule,
    UiZupperModule
  ],
  exports: [CursosComponent]
})
export class CursosModule { }
