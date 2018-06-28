import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatCard,
  MatCardTitle,
  MatCardContent,
  MatButtonModule
} from '@angular/material';
import { SortablejsModule } from 'angular-sortablejs';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { LinkListComponent } from './links/containers/link-list/link-list.component';
import { LinkComponent } from './links/components/link/link.component';
import { LinkFormComponent } from './links/components/link-form/link-form.component';
import { OpenWeatherMapComponent } from './open-weather-map/components/open-weather-map/open-weather-map.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SortablejsModule.forRoot({ animation: 150 })
  ],
  declarations: [
    LinkListComponent,
    LinkComponent,
    LinkFormComponent,
    OpenWeatherMapComponent
  ],
  entryComponents: [LinkListComponent, OpenWeatherMapComponent],
  exports: [LinkListComponent, OpenWeatherMapComponent]
})
export class WidgetsModule {}
