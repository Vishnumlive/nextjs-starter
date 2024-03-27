'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import 'flowbite/dist/flowbite.min.css';

import ImageUpload from '@/components/ImageUpload/ImageUpload';
import { ItemsFormElement } from '@/components/Items/ItemsFormElement';

const ItemForm = ({ itemName, itemId, itemsData, page, params }) => {
  console.log('Printing ' + itemName + ' data');
  console.log(itemsData);

  const [langData, setLangData] = useState();
  const [openTab, setOpenTab] = useState(1);
  const router = useRouter();

  useEffect(() => {
    console.log('Items form data ' + itemsData);
    console.log(params);
    if (itemsData) {
      // works for edit page
      setLangData(itemsData);
    } else {
      // works for add page
      setLangData({});
    }
  }, []);

  const activeClass =
    'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500';
  const inactiveClass =
    'rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300';

  return (
    <section className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
      <div className='container'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
            {page + ' ' + itemName}
          </h2>
        </div>

        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          {/* <h2 className='text-xl font-bold mb-4'>Upload Beach Image</h2> */}
          <div className='bg-white  rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-bold mb-4'>Upload Beach Image</h2>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                for='beachImage'
              >
                Beach Image
              </label>
              {/* <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='beachImage'
                type='file'
                accept='image/*'
              /> */}

              <ImageUpload />
            </div>
          </div>
        </div>

        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          {/* <h2 className='text-xl font-bold mb-4'>Upload Beach Image</h2> */}
          <div className='bg-white  rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-bold mb-4'>Beach Details</h2>
            <div className='flex flex-wrap'>
              <div className='w-full'>
                <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
                  <li className='me-2'>
                    <a
                      href='#'
                      className={
                        'inline-block p-4 ' +
                        (openTab === 1 ? activeClass : inactiveClass)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                    >
                      English
                    </a>
                  </li>
                  <li className='me-2'>
                    <a
                      href='#'
                      className={
                        'inline-block p-4 ' +
                        (openTab === 2 ? activeClass : inactiveClass)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                    >
                      Croatian
                    </a>
                  </li>
                  <li className='me-2'>
                    <a
                      href='#'
                      className={
                        'inline-block p-4 ' +
                        (openTab === 3 ? activeClass : inactiveClass)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                    >
                      Czech
                    </a>
                  </li>
                  <li className='me-2'>
                    <a
                      href='#'
                      className={
                        'inline-block p-4 ' +
                        (openTab === 4 ? activeClass : inactiveClass)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                    >
                      Dutch
                    </a>
                  </li>
                  <li className='me-2'>
                    <a
                      href='#'
                      className={
                        'inline-block p-4 ' +
                        (openTab === 5 ? activeClass : inactiveClass)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(5);
                      }}
                    >
                      French
                    </a>
                  </li>
                  <li className='me-2'>
                    <a
                      href='#'
                      className={
                        'inline-block p-4 ' +
                        (openTab === 6 ? activeClass : inactiveClass)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(6);
                      }}
                    >
                      German
                    </a>
                  </li>
                  <li className='me-2'>
                    <a
                      href='#'
                      className={
                        'inline-block p-4 ' +
                        (openTab === 7 ? activeClass : inactiveClass)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(7);
                      }}
                    >
                      Chinese
                    </a>
                  </li>
                </ul>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='tab-content tab-space'>
                      <div
                        className={openTab === 1 ? 'block' : 'hidden'}
                        id='link1'
                      >
                        {langData ? (
                          <ItemsFormElement
                            lang='en'
                            itemId={itemId}
                            itemName={itemName}
                            page={page}
                            itemLangData={langData}
                          />
                        ) : null}
                      </div>
                      <div
                        className={openTab === 2 ? 'block' : 'hidden'}
                        id='link2'
                      >
                        {langData ? (
                          <ItemsFormElement
                            lang='hr'
                            itemId={itemId}
                            itemName={itemName}
                            page={page}
                            itemLangData={langData}
                          />
                        ) : null}
                      </div>
                      <div
                        className={openTab === 3 ? 'block' : 'hidden'}
                        id='link3'
                      >
                        {langData ? (
                          <ItemsFormElement
                            lang='cs'
                            itemId={itemId}
                            itemName={itemName}
                            page={page}
                            itemLangData={langData}
                          />
                        ) : null}
                      </div>
                      <div
                        className={openTab === 4 ? 'block' : 'hidden'}
                        id='link3'
                      >
                        {langData ? (
                          <ItemsFormElement
                            lang='nl'
                            itemId={itemId}
                            itemName={itemName}
                            page={page}
                            itemLangData={langData}
                          />
                        ) : null}
                      </div>
                      <div
                        className={openTab === 5 ? 'block' : 'hidden'}
                        id='link3'
                      >
                        {langData ? (
                          <ItemsFormElement
                            lang='fr'
                            itemId={itemId}
                            itemName={itemName}
                            page={page}
                            itemLangData={langData}
                          />
                        ) : null}
                      </div>
                      <div
                        className={openTab === 6 ? 'block' : 'hidden'}
                        id='link3'
                      >
                        {langData ? (
                          <ItemsFormElement
                            lang='de'
                            itemId={itemId}
                            itemName={itemName}
                            page={page}
                            itemLangData={langData}
                          />
                        ) : null}
                      </div>
                      <div
                        className={openTab === 7 ? 'block' : 'hidden'}
                        id='link3'
                      >
                        {langData ? (
                          <ItemsFormElement
                            lang='cn'
                            itemId={itemId}
                            itemName={itemName}
                            page={page}
                            itemLangData={langData}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className='disabled:opacity-40 flex justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
            {page + ' ' + itemName}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemForm;
