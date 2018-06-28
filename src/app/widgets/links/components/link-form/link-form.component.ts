import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil, skip, debounceTime } from 'rxjs/operators';

import { Link } from '../../models/link';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss']
})
export class LinkFormComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  formGroup: FormGroup;
  modifiedLink: Link;

  @Input() link: Link;
  @Input() showErrors: Boolean;
  @Input() headerLabel: String;
  @Input() showCancelButton: Boolean;
  @Output() save = new EventEmitter<{ valid: Boolean; link: Link }>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.modifiedLink = { ...this.link };
    this.buildForm();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      ...this.modifiedLink,
      href: [this.modifiedLink.href, Validators.required]
    });

    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        debounceTime(150)
      )
      .subscribe(link => (this.modifiedLink = link));
  }
}
