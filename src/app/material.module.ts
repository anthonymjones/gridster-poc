import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

export const materialModules = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatDialogModule,
  MatToolbarModule,
  MatInputModule
];

const matDialogDefaults = {
  hasBackdrop: true,
  width: '450px'
};

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: matDialogDefaults }
  ]
})
export class MaterialModule {}
