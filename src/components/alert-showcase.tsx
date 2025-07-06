'use client';

import { Alert, Typography } from 'antd';
import { TeamOutlined, WarningOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const AlertShowcase = () => {
  const codeSnippets = {
    default: `
import { Alert } from "antd";
import { TerminalOutlined } from '@ant-design/icons';

<Alert
  icon={<TerminalOutlined />}
  message="Heads up!"
  description="You can add components to your app using the cli."
/>
    `.trim(),
    destructive: `
import { Alert } from "antd";
import { WarningOutlined } from '@ant-design/icons';

<Alert
  type="error"
  icon={<WarningOutlined />}
  message="Error"
  description="Your session has expired. Please log in again."
/>
    `.trim(),
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Title level={3}>Informational Alert</Title>
        <Paragraph type="secondary">
          The default alert style is used for general information, tips, or neutral messages that should be visible to the user without conveying urgency or a negative outcome.
        </Paragraph>
        <div style={{ padding: 24, border: '1px solid var(--ant-color-border)', borderRadius: 8, marginBottom: 16 }}>
          <Alert
            icon={<TeamOutlined />}
            message="Heads up!"
            description="You can add components to your app using the cli."
          />
        </div>
        <pre style={{ background: 'var(--ant-color-bg-container)', borderRadius: 8, fontSize: 14 }}>
          <code style={{ display: 'block', padding: 16 }}>{codeSnippets.default}</code>
        </pre>
      </div>

      <div>
        <Title level={3}>Destructive Alert</Title>
        <Paragraph type="secondary">
          The destructive alert variant is used for critical messages, errors, or warnings that require immediate user attention.
        </Paragraph>
        <div style={{ padding: 24, border: '1px solid var(--ant-color-border)', borderRadius: 8, marginBottom: 16 }}>
          <Alert
            type="error"
            icon={<WarningOutlined />}
            message="Error"
            description="Your session has expired. Please log in again."
          />
        </div>
        <pre style={{ background: 'var(--ant-color-bg-container)', borderRadius: 8, fontSize: 14 }}>
          <code style={{ display: 'block', padding: 16 }}>{codeSnippets.destructive}</code>
        </pre>
      </div>
    </div>
  );
};