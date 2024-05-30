// import { DropdownCustomProps } from "../../../shared/types/DropdownCustomProps";
// import { LabelProps } from "../../../shared/types/LabelProps";

import { MenuProps } from 'antd';

// export interface UserDataDropdownProps{
//     content : LabelProps;
//     menuProps: DropdownCustomProps;
// }

export interface UserDataDropdownProps {
  content: string;
  menuProps: MenuProps;
  defaultSelectedKey?: string;
  width: string;
}
