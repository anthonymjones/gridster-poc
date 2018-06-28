import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
    SettingsDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
