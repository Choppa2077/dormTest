import DropdownCustom from '../../../shared/ui/Dropdowns/DropdownCustom';
import { FC } from 'react';
import { UserDataDropdownProps } from '../types/UserDataDropdownProps';
import Label from '../../../shared/ui/label/Label';

const UserDropdown: FC<UserDataDropdownProps> = ({
  content,
  menuProps,
  defaultSelectedKey,
  width,
}) => {
  return (
    <div>
      <Label content={content} />
      <DropdownCustom
        menuProps={menuProps}
        defaultSelectedKey={defaultSelectedKey}
        width={width}
      />
    </div>
  );
};

export default UserDropdown;
