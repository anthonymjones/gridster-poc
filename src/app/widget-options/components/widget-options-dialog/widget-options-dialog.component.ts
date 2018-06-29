import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-widget-options-dialog',
  templateUrl: './widget-options-dialog.component.html',
  styleUrls: ['./widget-options-dialog.component.scss']
})
export class WidgetOptionsDialogComponent implements OnInit {
  location = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<WidgetOptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.populateForm();
  }

  cancel() {
    this.dialogRef.close();
  }

  populateForm() {
    this.location.setValue(this.data.widgetItem.widgetLocation);
  }

  submit() {
    if (
      this.location.value &&
      this.location.value !== this.data.widgetItem.widgetLocation
    ) {
      this.dialogRef.close(this.location.value);
    } else {
      this.dialogRef.close();
    }
  }
}
