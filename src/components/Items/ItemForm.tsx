'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import 'flowbite/dist/flowbite.min.css';

import ImageUpload from '@/components/ImageUpload/ImageUpload';
import { ItemsFormElement } from '@/components/Items/ItemsFormElement';
import TabView from '@/components/TabView/TabView';

import { addData, updateData } from '@/firebase/firestore/data';

const ItemForm = ({
  itemName,
  itemId,
  itemsData,
  page,
  category,
  returnUrl,
}) => {
  const [langData, setLangData] = useState();

  const router = useRouter();
  const [itemsLangData, setItemsLangData] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const updateItemsLangData = (data) => {
    // handling data from inner component and updating state
    const newArray = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        newArray[key] = data[key];
      }
    }
    setItemsLangData(newArray);
  };

  useEffect(() => {
    console.log('Image updated ');
  }, [imageUrl]);

  const handleImageUrl = (data) => {
    if (data) {
      setImageUrl(data);
      console.log('Image url ' + data);
    }
  };

  const addUpdateService = () => {
    const language = [];
    for (const key in itemsLangData) {
      language.push(key);
    }
    const currentTime = Date.now();

    if (!itemId) {
      // Add service

      const serviceDetails = {
        itemCategory: category,
        imageUrl: imageUrl,
        languages: language,
        created: currentTime,
        updated: currentTime,
        status: 'open',
        ...itemsLangData,
      };

      console.log('Printing service details');
      console.log(serviceDetails);

      const { error } = addData('services', serviceDetails);
      if (error) {
        toast.error(error);
      }

      toast.success('Service added successfully', {
        duration: 4000,
        position: 'top-center',
      });
    } else {
      // Update service

      // itemLangData[selLang] = itemData;
      const serviceDetails = {
        itemCategory: category,
        imageUrl: imageUrl,
        languages: language,
        updated: currentTime,
        ...itemsLangData,
      };

      console.log(serviceDetails);
      const { error } = updateData('services', itemId, serviceDetails);

      toast.success('Service updated successfully', {
        duration: 4000,
        position: 'top-center',
      });
    }

    router.push(returnUrl);
  };

  const NewTab = (
    <ItemsFormElement
      lang='en'
      itemName={itemName}
      page={page}
      newTab={true}
      itemsLangData={itemsLangData}
      updateDataField={updateItemsLangData}
    />
  );


  const EnglishTab = (
    <ItemsFormElement
      lang='en'
      itemName={itemName}
      page={page}
      newTab={false}
      itemsLangData={itemsLangData}
      updateDataField={updateItemsLangData}
    />
  );

  //const tabArray = [{ name: 'en', content: EnglishTab }];
  const tabArray = [];

  useEffect(() => {
    const langdataDb = [];
    if (itemsData.itemCategory) {
      // works for edit page

      for (const key in itemsData['languages']) {
        const ln = itemsData['languages'][key];
        langdataDb[ln] = itemsData[ln];
      }

      setItemsLangData(langdataDb);

      for (const key in itemsData['languages']) {
        const ln = itemsData['languages'][key];

        console.log('Print value ' + ln);
        if (itemsData.hasOwnProperty(ln)) {
          // Printing Keys

          const tabContent = (
            <ItemsFormElement
              lang={ln}
              itemName={itemName}
              page={page}
              newTab={false}
              itemsLangData={langdataDb}
              updateDataField={updateItemsLangData}
            />
          );

          tabArray.push({
            name: ln,
            content: tabContent,
          });
        }
      }

      setLangData(itemsData);

      setImageUrl(itemsData.imageUrl);
    } else {
      // works for add page

      tabArray.push({ name: 'en', content: EnglishTab });
      setLangData({});
    }
  }, []);

  return (
    <section className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
      <div className='container'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
            {page + ' ' + itemName}
          </h2>
        </div>

        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:flex-row md:justify-start md:items-center'>
          {/* <h2 className='text-xl font-bold mb-4'>Upload Beach Image</h2> */}
          <div className='bg-white  rounded px-8 pt-6 pb-8 mb-4 flex-auto w-64 '>
            <h2 className='text-xl font-bold mb-4'>Upload {itemName} Image</h2>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {itemName} Image
              </label>

              <ImageUpload
                folderName='services/'
                updateImageUrl={handleImageUrl}
              />
            </div>
          </div>

          <div className='bg-white  rounded px-8 pt-6 pb-8 mb-4'>
            {imageUrl && (
              <Image
                src={imageUrl}
                width={300}
                height={300}
                priority={false}
                alt='Picture of the Service'
              />
            )}
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
