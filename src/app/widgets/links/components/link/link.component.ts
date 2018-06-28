import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Link } from '../../models/link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() link: Link;
  @Input() showErrors: Boolean;
  @Input() showOptionsKebob: Boolean;
  @Output() edit = new EventEmitter<Number>();
  @Output() delete = new EventEmitter<Number>();

  constructor() {}
}
