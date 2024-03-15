
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Add User page',
  description: 'Pre-built components with awesome default',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
