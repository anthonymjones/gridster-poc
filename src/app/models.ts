import { GridsterItem } from 'angular-gridster2';

export enum SettingsInputType {
  'Input',
  'Checkbox',
  'Select'
}
export enum WidgetType {
  'Weather',
  'Link',
  'Map'
}

export interface SettingsPreference {
  type: SettingsInputType;
  defaultValue: string | boolean | number;
  options?: Array<any>;
}

export interface WidgetItem extends GridsterItem {
  title: string;
  type: WidgetType;
  settings: Array<SettingsPreference>;
}
