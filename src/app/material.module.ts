import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';


export const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatToolbarModule
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
