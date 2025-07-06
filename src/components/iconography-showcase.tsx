import React from 'react';
import { Space, Card, Typography, Tag } from 'antd';
import {
  StarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  InboxOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export const IconographyShowcase = () => {
  const codeSnippets = {
    basic: `
import { StarOutlined } from '@ant-design/icons';

<StarOutlined />
    `.trim(),
    sizing: `
import { StarOutlined } from '@ant-design/icons';

<StarOutlined style={{ fontSize: 16 }} />  {/* 16px */}
<StarOutlined style={{ fontSize: 24 }} />  {/* 24px */}
<StarOutlined style={{ fontSize: 32 }} />  {/* 32px */}
<StarOutlined style={{ fontSize: 48 }} />  {/* 48px */}
    `.trim(),
    coloring: `
import { CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';

<CheckCircleOutlined style={{ color: 'var(--ant-color-primary)' }} />
<CloseCircleOutlined style={{ color: 'var(--ant-color-error)' }} />
<InfoCircleOutlined style={{ color: 'var(--ant-color-info)' }} />
<QuestionCircleOutlined style={{ color: 'var(--ant-color-text-secondary)' }} />
    `.trim(),
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Title level={3}>Basic Usage</Title>
        <Paragraph type="secondary">
          Icons can be imported from @ant-design/icons and used directly as React components.
        </Paragraph>
        <Card style={{ marginBottom: 16 }}>
          <Space>
            <StarOutlined />
          </Space>
        </Card>
        <pre className="language-tsx">
          <code>{codeSnippets.basic}</code>
        </pre>
      </div>

      <div>
        <Title level={3}>Sizing</Title>
        <Paragraph type="secondary">
          Control icon size using the fontSize style property. Common sizes are 16px, 24px, 32px, and 48px.
        </Paragraph>
        <Card style={{ marginBottom: 16 }}>
          <Space size="large" align="end">
            <Space direction="vertical" align="center">
              <StarOutlined style={{ fontSize: 16 }} />
              <Tag>16px</Tag>
            </Space>
            <Space direction="vertical" align="center">
              <StarOutlined style={{ fontSize: 24 }} />
              <Tag>24px</Tag>
            </Space>
            <Space direction="vertical" align="center">
              <StarOutlined style={{ fontSize: 32 }} />
              <Tag>32px</Tag>
            </Space>
            <Space direction="vertical" align="center">
              <StarOutlined style={{ fontSize: 48 }} />
              <Tag>48px</Tag>
            </Space>
          </Space>
        </Card>
        <pre className="language-tsx">
          <code>{codeSnippets.sizing}</code>
        </pre>
      </div>

      <div>
        <Title level={3}>Coloring</Title>
        <Paragraph type="secondary">
          Change icon color using the color style property. Use Ant Design's theme tokens for consistency.
        </Paragraph>
        <Card style={{ marginBottom: 16 }}>
          <Space size="large">
            <Space direction="vertical" align="center">
              <CheckCircleOutlined style={{ fontSize: 24, color: 'var(--ant-color-primary)' }} />
              <Tag color="blue">Primary</Tag>
            </Space>
            <Space direction="vertical" align="center">
              <CloseCircleOutlined style={{ fontSize: 24, color: 'var(--ant-color-error)' }} />
              <Tag color="error">Error</Tag>
            </Space>
            <Space direction="vertical" align="center">
              <InfoCircleOutlined style={{ fontSize: 24, color: 'var(--ant-color-info)' }} />
              <Tag color="cyan">Info</Tag>
            </Space>
            <Space direction="vertical" align="center">
              <QuestionCircleOutlined style={{ fontSize: 24, color: 'var(--ant-color-text-secondary)' }} />
              <Tag>Secondary</Tag>
            </Space>
          </Space>
        </Card>
        <pre className="language-tsx">
          <code>{codeSnippets.coloring}</code>
        </pre>
      </div>
    </Space>
  );
};