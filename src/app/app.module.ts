import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GridsterModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
