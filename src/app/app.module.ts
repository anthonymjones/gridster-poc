import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GridsterModule } from 'angular-gridster2';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddWidgetDialogComponent } from './add-widget/components/add-widget-dialog.component';
import { MaterialModule } from './material.module';
import { AddWidgetComponent } from './add-widget/container/add-widget.component';
import { OpenWeatherMapComponent } from './open-weather-map/components/open-weather-map/open-weather-map.component';

@NgModule({
  declarations: [AppComponent, AddWidgetComponent, AddWidgetDialogComponent, OpenWeatherMapComponent],
  entryComponents: [AddWidgetDialogComponent, OpenWeatherMapComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridsterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
