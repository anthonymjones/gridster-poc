import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './add-widget-dialog.component.html',
  styleUrls: ['./add-widget-dialog.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class AddWidgetDialogComponent implements OnInit {
  widgetTypes = [];
  selectedType: string;
  location = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<AddWidgetDialogComponent>) {}

  ngOnInit() {
    this.widgetTypes = [
      { type: 'weather', color: 'warn' },
      { type: 'map', color: 'accent' },
      { type: 'link', color: 'primary' }
    ];
  }

  select(type: string) {
    this.selectedType = type;
  }

  deselect() {
    this.selectedType = null;
  }

  add() {
    if (this.location.value && this.location.value.length > 2) {
      this.dialogRef.close({
        widgetType: this.selectedType,
        widgetLocation: this.location.value
      });
    }
  }
}
