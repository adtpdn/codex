'use client';

import { Button, Typography, Space } from 'antd';
import {
  LoadingOutlined,
  PlusOutlined,
  SearchOutlined,
  SendOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const ButtonShowcase = () => {
  const codeSnippets = {
    variants: `
import { Button } from "antd";

<Button type="primary">Primary</Button>
<Button>Secondary</Button>
<Button type="dashed">Dashed</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>
    `.trim(),
    sizes: `
import { Button } from "antd";

<Button size="large">Large</Button>
<Button>Default</Button>
<Button size="small">Small</Button>
    `.trim(),
    states: `
import { Button } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
    `.trim(),
    icons: `
import { Button } from "antd";
import { PlusOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons';

<Button icon={<PlusOutlined />}>Add New</Button>
<Button icon={<SearchOutlined />}>Search</Button>
<Button type="primary" icon={<SendOutlined />}>Send</Button>
    `.trim(),
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Title level={3}>Button Variants</Title>
        <Paragraph type="secondary">
          Different button styles are available to indicate varying levels of emphasis.
        </Paragraph>
        <div style={{ padding: 24, border: '1px solid var(--ant-color-border)', borderRadius: 8, marginBottom: 16 }}>
          <Space>
            <Button type="primary">Primary</Button>
            <Button>Secondary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
          </Space>
        </div>
        <pre style={{ background: 'var(--ant-color-bg-container)', borderRadius: 8, fontSize: 14 }}>
          <code style={{ display: 'block', padding: 16 }}>{codeSnippets.variants}</code>
        </pre>
      </div>

      <div>
        <Title level={3}>Button Sizes</Title>
        <Paragraph type="secondary">
          Buttons come in three sizes to accommodate different use cases.
        </Paragraph>
        <div style={{ padding: 24, border: '1px solid var(--ant-color-border)', borderRadius: 8, marginBottom: 16 }}>
          <Space align="center">
            <Button size="large">Large</Button>
            <Button>Default</Button>
            <Button size="small">Small</Button>
          </Space>
        </div>
        <pre style={{ background: 'var(--ant-color-bg-container)', borderRadius: 8, fontSize: 14 }}>
          <code style={{ display: 'block', padding: 16 }}>{codeSnippets.sizes}</code>
        </pre>
      </div>

      <div>
        <Title level={3}>Button States</Title>
        <Paragraph type="secondary">
          Buttons can be in different states to indicate loading or disabled conditions.
        </Paragraph>
        <div style={{ padding: 24, border: '1px solid var(--ant-color-border)', borderRadius: 8, marginBottom: 16 }}>
          <Space>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </Space>
        </div>
        <pre style={{ background: 'var(--ant-color-bg-container)', borderRadius: 8, fontSize: 14 }}>
          <code style={{ display: 'block', padding: 16 }}>{codeSnippets.states}</code>
        </pre>
      </div>

      <div>
        <Title level={3}>Icons</Title>
        <Paragraph type="secondary">
          Buttons can include icons to provide additional visual cues.
        </Paragraph>
        <div style={{ padding: 24, border: '1px solid var(--ant-color-border)', borderRadius: 8, marginBottom: 16 }}>
          <Space>
            <Button icon={<PlusOutlined />}>Add New</Button>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Button type="primary" icon={<SendOutlined />}>Send</Button>
          </Space>
        </div>
        <pre style={{ background: 'var(--ant-color-bg-container)', borderRadius: 8, fontSize: 14 }}>
          <code style={{ display: 'block', padding: 16 }}>{codeSnippets.icons}</code>
        </pre>
      </div>
    </div>
  );
};