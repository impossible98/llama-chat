import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Llama Chat',
  description: 'Chat with Llama 2',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
