import { Component, OnInit } from '@angular/core';
import {
  GridsterConfig,
  GridsterItem,
  GridType,
  DisplayGrid
} from 'angular-gridster2';

import { MatIconRegistry } from '@angular/material';
// import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { OpenWeatherMapComponent } from './widgets/open-weather-map/components/open-weather-map/open-weather-map.component';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // icons
    const iconPath = '../assets/icons/';
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'baseline-add-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'drag-indicator',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'baseline-reorder-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'baseline-settings-20px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'baseline-close-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'more',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'baseline-more_vert-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'map',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'outline-map-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'link',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'outline-link-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'weather',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'outline-wb_sunny-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'moreVertical',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'baseline-more_vert-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'baseline-edit-24px.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl(
        iconPath + 'baseline-delete-24px.svg'
      )
    );
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

  updateItem(item, newLocation) {
    item.widgetLocation = newLocation;
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  onAddItem(gridsterItem) {
    console.log(gridsterItem);
    this.dashboard.push({ ...gridsterItem, x: 0, y: 0, cols: 1, rows: 1 });
  }

  itemSettings(item) {
    // TODO
    console.log('show settings for item', item);
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  loadGrid() {
    const storedDashboard = localStorage.getItem('dashboard');
    this.dashboard = storedDashboard
      ? JSON.parse(storedDashboard)
      : [{ x: 0, y: 0, cols: 1, rows: 1, component: OpenWeatherMapComponent }];
  }

  saveGrid() {
    localStorage.setItem('dashboard', JSON.stringify(this.dashboard));
  }
}
