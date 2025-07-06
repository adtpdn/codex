import { Dropdown, Menu } from 'antd';
import type { DropdownProps, MenuProps } from 'antd';

export const DropdownMenu = Dropdown;
export type { DropdownProps };

export const DropdownMenuTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => children;
export const DropdownMenuContent = Menu;
export const DropdownMenuItem = Menu.Item;
export const DropdownMenuGroup = Menu.ItemGroup;
export const DropdownMenuSub = Menu.SubMenu;