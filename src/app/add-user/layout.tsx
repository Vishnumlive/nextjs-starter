"use client"

import * as React from 'react';

import '@/styles/colors.css';

import { UserContextProvider } from '@/contexts/userContext';

// export const metadata: Metadata = {
//   title: 'Components Page',
//   description: 'Pre-built components with awesome default',
// };

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <><UserContextProvider>{children}</UserContextProvider></>;
}
