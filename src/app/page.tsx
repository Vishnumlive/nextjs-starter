'use client';

import Head from 'next/head';
import { signOut } from 'next-auth/react';
import {useSession } from 'next-auth/react';
// export default function HomePage() {
import * as React from 'react';
import '@/lib/env';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

import withAuth from '@/utils/withAuth';

import Logo from '~/svg/Logo.svg';

const HomePage = () => {

  const session = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect('/signin');
    // },
  });

  console.log(session);

//  console.log(session.data?.user?.email);
 

  return (
    <main>
      <Head>
        <title>Hi</title>

      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <div className='text-white'>{session?.data?.user?.email}</div>
          <button className='' onClick={() => signOut()}>Logout</button>

          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky{' '}
          </p>
          {/* <p className='mt-2 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
              See the repository
            </ArrowLink>
          </p> */}

          <ButtonLink className='mt-6' href='/components' variant='light'>
            See all components
          </ButtonLink>

          {/* <UnstyledLink
            href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
            className='mt-4'
          >
            
            <img
              width='92'
              height='32'
              src='https://vercel.com/button'
              alt='Deploy with Vercel'
            />
          </UnstyledLink> */}

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
}

export default withAuth(HomePage);

