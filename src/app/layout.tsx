'use client';

import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import { defaultTheme } from '@/lib/themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider theme={defaultTheme}>
      <Layout style={{ minHeight: '100vh' }}>
        {children}
      </Layout>
    </ConfigProvider>
  );
}