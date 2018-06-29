import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { WidgetOptionsDialogComponent } from './../components/widget-options-dialog/widget-options-dialog.component';

@Component({
  selector: 'app-widget-options',
  templateUrl: './widget-options.component.html',
  styleUrls: ['./widget-options.component.scss']
})
export class WidgetOptionsComponent implements OnInit {
  @Input() widgetItem;
  @Output() removeWidget = new EventEmitter();
  @Output() updateWidget = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(WidgetOptionsDialogComponent, {
      data: { widgetItem: this.widgetItem }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.updateWidget.emit(data);
      }
    });
  }
}
