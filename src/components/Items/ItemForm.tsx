'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import 'flowbite/dist/flowbite.min.css';

import ImageUpload from '@/components/ImageUpload/ImageUpload';
import { ItemsFormElement } from '@/components/Items/ItemsFormElement';
import TabView from '@/components/TabView/TabView';

import { addData, updateData } from '@/firebase/firestore/data';

const ItemForm = ({ itemName, itemId, itemsData, page, params }) => {
  console.log('Printing ' + itemName + ' data');
  console.log(itemsData);

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

  const addUpdateService = () => {
    const language = [];
    for (const key in itemsLangData) {
      language.push(key);
    }

    if (!itemId) {
      // Add service

      const serviceDetails = {
        itemCategory: 'beach',
        intLang: 'en',
        languages: language,
        ...itemsLangData,
      };

      console.log('Printing service details');
      console.log(serviceDetails);

      const { error } = addData('services', serviceDetails);
      if (error) {
        toast.error(error);
      }

      toast.success('Service added successfully');
    } else {
      // Update service

      // itemLangData[selLang] = itemData;
      const serviceDetails = {
        itemCategory: 'beach',
        intLang: 'en',
        languages: language,
        ...itemsLangData,
      };

      console.log(serviceDetails);
      const { error } = updateData('services', itemId, serviceDetails);

      toast.success('Service updated successfully');
    }

    // setItemData({});

    // console.log(serviceDetails);
  };

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

  //const tabArray = [{ name: 'en', content: EnglishTab }];
  const tabArray = [];

  useEffect(() => {
    // console.log('Items form data ' + itemsData);
    console.log(itemsData.itemCategory);
    const langdataDb = [];
    if (itemsData.itemCategory) {
      for (const key in itemsData['languages']) {
        const ln = itemsData['languages'][key];
        langdataDb[ln] = itemsData[ln];
      }

      console.log(langdataDb);

      setItemsLangData(langdataDb);

      for (const key in itemsData['languages']) {
        const ln = itemsData['languages'][key];

        console.log('Print value ' + ln);
        if (itemsData.hasOwnProperty(ln)) {
          // Printing Keys
          console.log("Printing inside" + itemsData[ln]);
          const tabContent = (
            <ItemsFormElement
              lang={ln}
              itemId={itemId}
              itemName={itemName}
              page={page}
              itemLangData={langData}
              newTab={false}
              itemsLangData={langdataDb}
              updateDataField={updateItemsLangData}
            />
          );

          tabArray.push({
            name: ln,
            content: tabContent,
          });
        } else {
          console.log("else part is working");
        }
      }
      console.log('printing tab data');
      console.log(tabArray);
      // works for edit page
      setLangData(itemsData);


    } else {

      tabArray.push({ name: 'en', content: EnglishTab });
      console.log(tabArray);
      // works for add page
      setLangData({});
    }
  }, []);

  // const activeClass =
  //   'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500';
  // const inactiveClass =
  //   'rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300';

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
          <button
            className='disabled:opacity-40 flex justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
            onClick={() => {
              addUpdateService();
            }}
          >
            {page + ' ' + itemName}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemForm;
