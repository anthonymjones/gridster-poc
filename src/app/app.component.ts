import { Component, OnInit } from '@angular/core';
import {
  GridsterConfig,
  GridsterItem,
  GridType,
  DisplayGrid
} from 'angular-gridster2';

import { MatIconRegistry, MatDialog } from '@angular/material';
// import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  wobble: any;
  title = 'Dashboard POC';
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    // icons
    const iconPath = '../assets/icons/';
    iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl(iconPath + 'baseline-add-24px.svg'));
    iconRegistry.addSvgIcon('drag-indicator', sanitizer.bypassSecurityTrustResourceUrl(iconPath + 'baseline-reorder-24px.svg'));
    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl(iconPath + 'baseline-settings-20px.svg'));
    iconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl(iconPath + 'baseline-close-24px.svg'));
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.OnDragAndResize,
      maxCols: 5,
      maxRows: 5,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },

      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize
    };

    this.loadGrid();
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  itemSettings(item) {
    console.log('show settings for item', item);
    this.dialog.open(SettingsDialogComponent, {
      data: item.settings
    });
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  loadGrid() {
    const storedDashboard = localStorage.getItem('dashboard');
    this.dashboard = storedDashboard ? JSON.parse(storedDashboard) : [];
  }

  saveGrid() {
    localStorage.setItem('dashboard', JSON.stringify(this.dashboard));
  }
}
