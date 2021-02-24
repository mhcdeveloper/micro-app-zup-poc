import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@zup-academy/material';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UiZupperModule } from '@zup-academy/ui-zupper';

import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SignInComponent,
      },
    ]),
    MaterialModule,
    UiZupperModule
  ],
  declarations: [SignInComponent],
  exports: [SignInComponent],
})
export class LoginModule {}
