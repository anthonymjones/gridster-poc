import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { wobble } from 'ng-animate';
import {
  GridsterConfig,
  GridsterItem,
  GridType,
  DisplayGrid
} from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('wobble', [
      transition(
        '* => *',
        useAnimation(wobble, {
          params: { timing: 5 }
        })
      )
    ])
  ]
})
export class AppComponent implements OnInit {
  wobble: any;
  title = 'app';
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

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
