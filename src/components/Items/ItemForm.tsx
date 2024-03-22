import { useState } from 'react';

import { addData } from '@/firebase/firestore/data';

const ItemForm = ({ itemName }) => {
  const [catNameEn, setCatNameEn] = useState('');
  const [catNameCn, setCatNameCn] = useState('');
  const [catNameHr, setCatNameHr] = useState('');
  const [catNameCs, setCatNameCs] = useState('');
  const [catNameNl, setCatNameNl] = useState('');
  const [catNameFr, setCatNameFr] = useState('');
  const [catNameDe, setCatNameDe] = useState('');

  function addItem() {
    const categoryDetails = {
      en: {
        categoryName: catNameEn,
      },
      cn: {
        categoryName: catNameCn,
      },
      hr: {
        categoryName: catNameHr,
      },
      cs: {
        categoryName: catNameCs,
      },
      nl: {
        categoryName: catNameNl,
      },
      fr: {
        categoryName: catNameFr,
      },
      de: {
        categoryName: catNameDe,
      },
    };

    const { error } = addData('services', categoryDetails);
  }

  return (
    <div>
      <div className='max-w-2xl mx-auto bg-white p-16 rounded'>
        <div
          id='accordion-flush'
          data-accordion='collapse'
          data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
          data-inactive-classes='text-gray-500 dark:text-gray-400'
        >
          <h2 id='accordion-flush-heading-1'>
            <button
              type='button'
              className='flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 rounded-t-xl border-b border-gray-200 dark:border-gray-700 dark:text-white'
              data-accordion-target='#accordion-flush-body-1'
              aria-expanded='true'
              aria-controls='accordion-flush-body-1'
            >
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 rotate-180 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-flush-body-1'
            aria-labelledby='accordion-flush-heading-1'
          >
            <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                Check out this guide to learn how to{' '}
                <a
                  href='#'
                  className='text-blue-600 dark:text-blue-500 hover:underline'
                >
                  get started
                </a>{' '}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id='accordion-flush-heading-2'>
            <button
              type='button'
              className='flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
              data-accordion-target='#accordion-flush-body-2'
              aria-expanded='false'
              aria-controls='accordion-flush-body-2'
            >
              <span>Is there a Figma file available?</span>
              <svg
                data-accordion-icon
                className='w-6 h-6 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-flush-body-2'
            className='hidden'
            aria-labelledby='accordion-flush-heading-2'
          >
            <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                Check out the{' '}
                <a
                  href='https://flowbite.com/figma/'
                  className='text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Figma design system
                </a>{' '}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
          <h2 id='accordion-flush-heading-3'>
            <button
              type='button'
              className='flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
              data-accordion-target='#accordion-flush-body-3'
              aria-expanded='false'
              aria-controls='accordion-flush-body-3'
            >
              <span>
                What are the differences between Flowbite and Tailwind UI?
              </span>
              <svg
                data-accordion-icon
                className='w-6 h-6 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id='accordion-flush-body-3'
            className='hidden'
            aria-labelledby='accordion-flush-heading-3'
          >
            <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Learn more about these technologies:
              </p>
              <ul className='pl-5 list-disc text-gray-500 dark:text-gray-400'>
                <li>
                  <a
                    href='https://flowbite.com/pro/'
                    className='text-blue-600 dark:text-blue-500 hover:underline'
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href='https://tailwindui.com/'
                    rel='nofollow'
                    className='text-blue-600 dark:text-blue-500 hover:underline'
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className='mt-5'>
          This accordion component is part of a larger, open-source library of
          Tailwind CSS components. Learn more by going to the official{' '}
          <a
            className='text-blue-600 hover:underline'
            href='https://flowbite.com/docs/getting-started/introduction/'
            target='_blank'
          >
            Flowbite Documentation
          </a>
          .
        </p>
        <script src='https://unpkg.com/flowbite@1.3.3/dist/flowbite.js'></script>
      </div>

      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
            Add {itemName}
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <div className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Category Name in English
              </label>
              <div className='mt-2'>
                <input
                  name='categoryNameEn'
                  type='text'
                  onChange={(e) => setCatNameEn(e.target.value)}
                  value={catNameEn}
                  required
                  className='block w-full rounded-md border-1 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Category Name in Chinese
              </label>
              <div className='mt-2'>
                <input
                  name='categoryNameCn'
                  type='text'
                  onChange={(e) => setCatNameCn(e.target.value)}
                  value={catNameCn}
                  required
                  className='block w-full rounded-md border-1 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Category Name in Croatian
              </label>
              <div className='mt-2'>
                <input
                  name='categoryNameHr'
                  type='text'
                  value={catNameHr}
                  onChange={(e) => setCatNameHr(e.target.value)}
                  required
                  className='block w-full rounded-md border-1 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Category Name in Czech
              </label>
              <div className='mt-2'>
                <input
                  name='categoryNameCs'
                  type='text'
                  value={catNameCs}
                  onChange={(e) => setCatNameCs(e.target.value)}
                  required
                  className='block w-full rounded-md border-1 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Category Name in Dutch
              </label>
              <div className='mt-2'>
                <input
                  name='categoryNameNl'
                  type='text'
                  value={catNameNl}
                  onChange={(e) => setCatNameNl(e.target.value)}
                  required
                  className='block w-full rounded-md border-1 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Category Name in French
              </label>
              <div className='mt-2'>
                <input
                  name='categoryNameFr'
                  type='text'
                  value={catNameFr}
                  onChange={(e) => setCatNameFr(e.target.value)}
                  required
                  className='block w-full rounded-md border-1 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Category Name in German
              </label>
              <div className='mt-2'>
                <input
                  name='categoryNameDe'
                  type='text'
                  value={catNameDe}
                  onChange={(e) => setCatNameDe(e.target.value)}
                  required
                  className='block w-full rounded-md border-1 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                className='disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                onClick={() => addItem()}
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;
