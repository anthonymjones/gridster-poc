import { GridsterItem } from 'angular-gridster2';

export enum SettingsInputType {
  'Input',
  'Checkbox',
  'Select'
}

export interface SettingsPreference {
  type: SettingsInputType;
  defaultValue: string | boolean | number;
  options?: Array<any>;
}

export interface WidgetItem extends GridsterItem {
  title: string;
  settings: Array<SettingsPreference>;
}
