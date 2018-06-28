import { AddWidgetDialogComponent } from './../components/add-widget-dialog.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.scss']
})
export class AddWidgetComponent implements OnInit {
  @Output() addItem = new EventEmitter<object>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddWidgetDialogComponent, {
      width: '75vw',
      height: '350px'
    });
    dialogRef.afterClosed().subscribe(typeAndLocation => {
      if (typeAndLocation) {
        this.selectWidgetType(typeAndLocation);
      }
    });
  }

  selectWidgetType(typeAndLocation: {
    widgetType: string;
    widgetLocation: string;
  }) {
    this.addItem.emit({
      widgetType: typeAndLocation.widgetType,
      widgetLocation: typeAndLocation.widgetLocation
    });
  }
}
