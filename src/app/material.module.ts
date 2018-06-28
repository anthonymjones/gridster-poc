import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

export const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class MaterialModule {}
