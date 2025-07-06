import { ThemeConfig } from 'antd';

// Theme interface for our custom theme
export interface CustomTheme extends ThemeConfig {
  token: ThemeConfig['token'] & {
    colorPrimary: string;
    colorBgContainer: string;
    colorText: string;
    // Additional theme tokens
    colorDestructive: string;
    colorMuted: string;
    colorMutedForeground: string;
    colorAccent: string;
  };
}

// Light theme
export const lightTheme: CustomTheme = {
  token: {
    colorPrimary: '#1677ff',
    colorBgContainer: '#ffffff',
    colorText: '#000000',
    colorDestructive: '#ff4d4f',
    colorMuted: '#f5f5f5',
    colorMutedForeground: '#737373',
    colorAccent: '#8ab4f8',
    borderRadius: 6,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 16,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 40,
      algorithm: true,
    },
    Card: {
      borderRadius: 8,
    },
    Layout: {
      bodyBg: '#ffffff',
      headerBg: '#ffffff',
      siderBg: '#ffffff',
    },
  },
};

// Dark theme
export const darkTheme: CustomTheme = {
  token: {
    colorPrimary: '#1668dc',
    colorBgContainer: '#141414',
    colorText: '#ffffff',
    colorDestructive: '#ff7875',
    colorMuted: '#262626',
    colorMutedForeground: '#a3a3a3',
    colorAccent: '#a779e4',
    borderRadius: 6,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 16,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 40,
      algorithm: true,
    },
    Card: {
      borderRadius: 8,
    },
    Layout: {
      bodyBg: '#141414',
      headerBg: '#141414',
      siderBg: '#141414',
    },
  },
};

// Default theme
export const defaultTheme = lightTheme;