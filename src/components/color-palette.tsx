import React from 'react';
import { Card, Typography, Space, Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface ColorSwatch {
  name: string;
  hex: string;
}

interface ColorPaletteProps {
  colors: ColorSwatch[];
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    message.success(`Copied ${text} to clipboard`);
  };

  const getRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '';
  };

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      {colors.map(({ name, hex }) => (
        <Card
          key={name}
          bodyStyle={{
            padding: 0,
            overflow: 'hidden',
            borderRadius: 'var(--ant-border-radius)',
          }}
        >
          <div style={{ display: 'flex', height: '100%' }}>
            <div
              style={{
                width: '30%',
                backgroundColor: hex,
                minHeight: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <div style={{ padding: 16, flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <Text strong>{name}</Text>
                <Button
                  type="text"
                  icon={<CopyOutlined />}
                  onClick={() => copyToClipboard(hex)}
                  aria-label={`Copy hex value ${hex}`}
                />
              </div>
              <Space direction="vertical" size="small">
                <Text type="secondary">HEX: {hex}</Text>
                <Text type="secondary">RGB: {getRgb(hex)}</Text>
              </Space>
            </div>
          </div>
        </Card>
      ))}
    </Space>
  );
};