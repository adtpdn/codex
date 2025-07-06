import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

export type MenuBarProps = MenuProps;

export const MenuBar: React.FC<MenuBarProps> = (props) => {
    return <Menu mode="horizontal" {...props} />;
};

export { Menu as MenuBarMenu };
export { Menu.SubMenu as MenuBarSubMenu };
export { Menu.ItemGroup as MenuBarGroup };
export { Menu.Item as MenuBarItem };