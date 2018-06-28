import { NgModule } from '@angular/core';

import { AddWidgetDialogComponent } from './app/add-widget/components/add-widget-dialog.component';
import { OpenWeatherMapComponent } from './app/widgets/open-weather-map/components/open-weather-map/open-weather-map.component';
import { LinkListComponent } from './app/widgets/links/containers/link-list/link-list.component';
import { LinkComponent } from './app/widgets/links/components/link/link.component';
import { LinkFormComponent } from './app/widgets/links/components/link-form/link-form.component';

const TEST_COMPONENTS = [
  AddWidgetDialogComponent,
  OpenWeatherMapComponent,
  LinkListComponent,
  LinkComponent,
  LinkFormComponent
];
@NgModule({
  exports: TEST_COMPONENTS,
  declarations: TEST_COMPONENTS,
  entryComponents: TEST_COMPONENTS
})
export class TestModule {}
