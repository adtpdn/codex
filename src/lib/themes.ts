import { ThemeConfig } from 'antd';

// Light theme configuration
export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 6,
    colorBgContainer: '#ffffff',
    colorText: '#000000',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: 16,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Card: {
      borderRadius: 8,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Layout: {
      bodyBg: '#ffffff',
      headerBg: '#ffffff',
      siderBg: '#ffffff',
    },
    Menu: {
      itemHeight: 40,
      itemBorderRadius: 6,
    },
  },
};

// Dark theme configuration
export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1668dc',
    borderRadius: 6,
    colorBgContainer: '#000000',
    colorText: '#ffffff',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: 16,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Card: {
      borderRadius: 8,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Layout: {
      bodyBg: '#141414',
      headerBg: '#141414',
      siderBg: '#141414',
    },
    Menu: {
      itemHeight: 40,
      itemBorderRadius: 6,
      darkItemBg: '#141414',
    },
  },
};

// Default theme
export const defaultTheme = lightTheme;

// Theme interface
export interface CustomTheme extends ThemeConfig {
  // Add any custom theme properties here
}