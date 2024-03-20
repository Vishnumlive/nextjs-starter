import * as React from 'react';

import '@/styles/colors.css';

// export const metadata: Metadata = {
//   title: 'Components Page',
//   description: 'Pre-built components with awesome default',
// };

export async function generateMetadata({ params: { lng } }) {
  const messages = (await import(`../../i18n/locales/${lng}/meta-data.json`))
    .default;

  // return an object
  return {
    title: messages.components.metatitle,
    description: messages.components.metadescription,
  };
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
