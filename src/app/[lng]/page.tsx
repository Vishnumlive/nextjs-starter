'use client';

import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
// export default function HomePage() {
import * as React from 'react';
import '@/lib/env';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

import withAuth from '@/utils/withAuth';

import { useTranslation } from '../i18n/client';

import Logo from '~/svg/Logo.svg';

const HomePage = ({ params: { lng } }) => {
  const session = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect('/signin');
    // },
  });

  const { t } = useTranslation(lng, 'home-page');
  // console.log(session);

  //  console.log(session.data?.user?.email);

  return (
    <main>
      {/* <Head>
        <title>Hi</title>
      </Head> */}
      <section className='bg-white'>
        {/* <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'> */}
        <div className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          {/* <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'> */}
          <Logo className='w-16' />
          <div className='text-white'>{session?.data?.user?.email}</div>
          <button className='' onClick={() => signOut()}>
            {t('logout')}
          </button>

          <h1 className='mt-4'>{t('main-title')}</h1>
          <p className='mt-2 text-sm text-gray-800'>{t('sub-title')}</p>

          <ButtonLink
            className='mt-6'
            href={`/${lng}/components`}
            variant='light'
          >
            {t('see-all-component')}
          </ButtonLink>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://www.grapelime.in/'>
              Grapelime
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default withAuth(HomePage);
