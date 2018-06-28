import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Link } from '../../models/link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  // TODO: Turn this into a LinkGroup type so users can save multiple link
  // widget instances (The array of links will be a part of it). Not done here
  // in POC for simplicity's sake
  links: Array<Link> = [
    {
      id: 'aba2cafa-9f83-41e1-a95f-82f046e6ad58',
      text: 'Some text',
      href: 'https://www.google.com'
    },
    {
      id: '2e460a3a-180e-416b-9711-c2fe5b31e08d',
      text: 'Some other text',
      href: 'https://www.asdf.com'
    },
    {
      id: '773dbd53-65d5-45d0-92ac-7212522de020',
      text: 'Some different text',
      href: 'https://www.angular.io'
    }
  ];
  linkToEdit: Link;
  hoveredLink: String;
  showErrors: Boolean;
  sortOptions = {
    group: 'linksWidget',
    onUpdate: event => this.onUpdateLinkOrder(event),
    onRemove: event => this.onLinkMovedToAnotherList(event),
    onAdd: event => this.onLinkAddedFromAnotherList(event)
  };
  isAddingNew: Boolean;
  // TODO: @Input for existing user links instead of static array above

  constructor() {}

  ngOnInit() {
    // TODO: If no links are passed in via the @Input, execute:
    // this.openFormWithNewLink()
  }

  onEdit(id: String) {
    this.executeIfIdExists(id, link => (this.linkToEdit = link));
  }

  onDelete(id) {
    this.executeIfIdExists(id, (storedLink, index) =>
      this.links.splice(index, 1)
    );

    if (this.links.length === 0) {
      this.openFormWithNewLink();
    }
  }

  onSave({ link, valid }) {
    if (valid === false) {
      this.showErrors = true;
      return;
    }

    // TODO: This will need be assigned by the server when truly implemented:
    if (!link.id) {
      link.id = '' + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }

    this.executeIfIdExists(
      link.id,
      (storedLink, index) => {
        // TODO: PATCH request to server
        this.links[index] = link;
      },
      () => {
        // TODO: POST request to server
        this.links.push(link);
      }
    );

    this.closeForm();
  }

  onCancel() {
    this.closeForm();
  }

  onUpdateLinkOrder(event) {
    // TODO: PATCH request to server - `event` has newly sorted array.
    // `this.links` is automatically updated by the library - only the server
    // request is needed here.
  }

  onLinkMovedToAnotherList(event) {
    // TODO: DELETE request to server - `event` has new and old array.
    // `this.links` is automatically updated by the library - only the server
    // request is needed here.

    if (this.links.length === 0) {
      this.openFormWithNewLink();
    }
  }

  onLinkAddedFromAnotherList(event) {
    // TODO: POST request to server - `event` has new and old array.
    // `this.links` is automatically updated by the library - only the server
    // request is needed here.
  }

  onLinkMouseEnter(id: String) {
    this.hoveredLink = id;
  }

  onLinkMouseLeave(id) {
    this.hoveredLink = id === this.hoveredLink ? null : this.hoveredLink;
  }

  onAddNewLinkClick() {
    this.openFormWithNewLink();
  }

  private closeForm() {
    this.linkToEdit = null;
    this.showErrors = false;
    this.isAddingNew = false;
  }

  private openFormWithNewLink() {
    this.isAddingNew = true;
    this.linkToEdit = { id: '', text: '', href: '' };
  }

  private executeIfIdExists(id: String, successCallback, failCallback?) {
    const index = this.links.findIndex(link => link.id === id);

    if (index !== -1 && successCallback) {
      successCallback(this.links[index], index);
    } else if (failCallback) {
      failCallback();
    }
  }
}
