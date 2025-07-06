import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useSidebar } from '@/components/sidebar-provider';

const { Sider } = Layout;

export interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      breakpoint="md"
      collapsedWidth={80}
      width={240}
      className={className}
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {children}
    </Sider>
  );
};

export interface SidebarMenuProps extends MenuProps {
  items: MenuProps['items'];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, ...props }) => {
  return (
    <Menu
      mode="inline"
      items={items}
      style={{ borderRight: 0 }}
      {...props}
    />
  );
};

// Re-export Menu sub-components for convenience
export const {
  Item: SidebarMenuItem,
  SubMenu: SidebarSubMenu,
  ItemGroup: SidebarItemGroup,
} = Menu;