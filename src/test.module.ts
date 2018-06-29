import { NgModule } from '@angular/core';
import { AddWidgetDialogComponent } from './app/add-widget/components/add-widget-dialog.component';
import { OpenWeatherMapComponent } from './app/open-weather-map/components/open-weather-map/open-weather-map.component';

const TEST_COMPONENTS = [AddWidgetDialogComponent, OpenWeatherMapComponent];
@NgModule({
  exports: TEST_COMPONENTS,
  declarations: TEST_COMPONENTS,
  entryComponents: TEST_COMPONENTS
})
export class TestModule {}
