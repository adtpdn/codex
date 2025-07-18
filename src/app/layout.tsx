import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarProvider } from '@/components/sidebar-provider';
import { App } from 'antd';
import './globals.css';

export const metadata: Metadata = {
  title: 'React Codex',
  description: 'A documentation editor for React and CSS themes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <App>{children}</App>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}