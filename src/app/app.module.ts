import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { AddWidgetDialogComponent } from './add-widget/components/add-widget-dialog.component';
import { MaterialModule } from './material.module';
import { AddWidgetComponent } from './add-widget/container/add-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWidgetComponent,
    AddWidgetDialogComponent,
    SettingsDialogComponent
  ],
  entryComponents: [
    AddWidgetDialogComponent,
    SettingsDialogComponent
  ],
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
