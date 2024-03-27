'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import ImageUpload from '@/components/ImageUpload/ImageUpload';
import { ItemsFormElement } from '@/components/Items/ItemsFormElement';
import { TabView } from '@/components/TabView/TabView';

const SamplePage = () => {
  const itemId = null;
  const page = 'Add';
  const itemsData = null;
  const itemName = 'Beach';

  const [langData, setLangData] = useState();
  const [openTab, setOpenTab] = useState(1);
  const router = useRouter();

  const [itemsLangData, setItemsLangData] = useState([]);

  const updateItemsLangData = (data) => {
    const newArray = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        // Printing Keys
        newArray[key] = data[key];
      }
    }

    setItemsLangData(newArray);
  };

  const EnglishTab = (
    <ItemsFormElement
      lang='en'
      itemId={itemId}
      itemName={itemName}
      page={page}
      itemLangData={langData}
      newTab={false}
      itemsLangData={itemsLangData}
      updateDataField={updateItemsLangData}
    />
  );

  const tabArray = [{ name: 'en', content: EnglishTab }];

  console.log('Printing ' + itemName + ' data');
  console.log(itemsData);

  useEffect(() => {
    console.log('Use effect is working');

    const labDetails = { name: 'English', content: EnglishTab };

    for (const key in itemsLangData) {
      if (itemsLangData.hasOwnProperty(key)) {
        // Printing Keys

        const tabContent = (
          <ItemsFormElement
            lang={key}
            itemId={itemId}
            itemName={itemName}
            page={page}
            itemLangData={langData}
            newTab={false}
            itemsLangData={itemsLangData}
            updateDataField={updateItemsLangData}
          />
        );

        tabArray.push({
          name: key,
          content: tabContent,
        });
      }
    }
    console.log(tabArray);
  }, [itemsLangData, ItemsFormElement]);

  useEffect(() => {
    console.log('Items form data ' + itemsData);
    // console.log(params);
    if (itemsData) {
      // works for edit page
      setLangData(itemsData);
    } else {
      // works for add page
      setLangData({});
    }
  }, []);

  const NewTab = (
    <ItemsFormElement
      lang='en'
      itemId={itemId}
      itemName={itemName}
      page={page}
      itemLangData={langData}
      newTab={true}
      itemsLangData={itemsLangData}
      updateDataField={updateItemsLangData}
    />
  );

  const activeClass =
    'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500';
  const inactiveClass =
    'rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300';

  return (
    <div>
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
                  {itemsLangData && (
                    <TabView
                      title='Tab Test'
                      tabs={tabArray}
                      newTabContent={NewTab}
                      itemsLangData={itemsLangData}
                    />
                  )}
                </div>
              </div>
            </div>
            <button className='disabled:opacity-40 flex justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
              {page + ' ' + itemName}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SamplePage;
