'use client';

import { Terminal, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export const AlertShowcase = () => {
  const codeSnippets = {
    default: `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>
    `.trim(),
    destructive: `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';

<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
    `.trim(),
  }

  return (
    <div className="my-6 space-y-8">
      <div>
        <h3 className="font-headline text-xl mb-4 pb-2 border-b">Informational Alert</h3>
        <p className="text-muted-foreground mb-4">
          The default alert style is used for general information, tips, or neutral messages that should be visible to the user without conveying urgency or a negative outcome.
        </p>
        <div className="p-6 border rounded-lg bg-card mb-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>
        <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
          <code className="block p-4">{codeSnippets.default}</code>
        </pre>
      </div>

      <div>
        <h3 className="font-headline text-xl mb-4 pb-2 border-b">Destructive Alert</h3>
        <p className="text-muted-foreground mb-4">
          The destructive alert variant is used for critical messages, errors, or warnings that require immediate user attention. It uses the 'destructive' theme color to signify a potentially negative or dangerous action.
        </p>
        <div className="p-6 border rounded-lg bg-card mb-4">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
        <pre className="bg-muted dark:bg-black/50 rounded-lg font-code text-sm overflow-x-auto">
          <code className="block p-4">{codeSnippets.destructive}</code>
        </pre>
      </div>
    </div>
  );
};
