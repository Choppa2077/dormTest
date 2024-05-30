import { FC, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, MenuProps, Space } from 'antd';
import { DropdownCustomProps } from '../../types/DropdownCustomProps';
import { hasOnClick, isMenuItemType } from './dropdownUtils';
import style from './deafultDropdown.module.css';

const DropdownCustom: FC<DropdownCustomProps> = ({
  menuProps,
  defaultSelectedKey,
  width,
}) => {
  const [selectedKey, setSelectedKey] = useState<string | undefined>(
    defaultSelectedKey,
  );

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectedKey(e.key);
    const item = menuProps.items?.find((item) => item && item.key === e.key);
    if (item && hasOnClick(item)) {
      item.onClick(e);
    }
  };

  const selectedItem = menuProps.items?.find(
    (item) => item && item.key === selectedKey && isMenuItemType(item),
  );

  return (
    <Dropdown overlay={<Menu {...menuProps} onClick={handleMenuClick} />}>
      <Button className={style.defaultDropdown} style={{ width }}>
        <div className={style.dropdownContent}>
          {selectedItem ? selectedItem.label : 'Select an option'}
          <DownOutlined />
        </div>
      </Button>
    </Dropdown>
  );
};

export default DropdownCustom;
