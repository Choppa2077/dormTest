import { MenuItemType } from "antd/es/menu/interface";

export const isMenuItemType = (item: any): item is MenuItemType =>
  'label' in item;

export const hasOnClick = (item: any): item is { onClick: (e: any) => void } =>
  'onClick' in item && typeof item.onClick === 'function';
