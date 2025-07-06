"use client"

import React from 'react';
import { Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';
import { useTheme } from "@/components/theme-provider";
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const items: MenuProps['items'] = [
    {
      key: 'light',
      label: 'Light',
      onClick: () => setTheme("light"),
    },
    {
      key: 'dark',
      label: 'Dark',
      onClick: () => setTheme("dark"),
    },
    {
      key: 'system',
      label: 'System',
      onClick: () => setTheme("system"),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button 
        type="text"
        icon={theme === 'dark' ? <BulbFilled /> : <BulbOutlined />}
        aria-label="Toggle theme"
      />
    </Dropdown>
  );
}