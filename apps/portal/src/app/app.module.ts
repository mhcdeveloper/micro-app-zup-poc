import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AuthGuard } from '@zup-academy/guards-routes';
import { UiZupperModule } from '@zup-academy/ui-zupper';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiZupperModule,
    CursosModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
