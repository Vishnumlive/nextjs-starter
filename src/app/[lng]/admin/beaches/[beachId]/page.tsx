'use client';

import { cache, useEffect, useState } from 'react';

import ItemForm from '@/components/Items/ItemForm';

import { getSingleData } from '@/firebase/firestore/data';

interface pageProps {
  params: { beachId: string };
}

export const getItem = cache(async (beachId: string) => {
  const servicesItems = await getSingleData('services', beachId);
  return servicesItems;
});

const EditPage = ({ params }) => {
  const [beachData, setBeachData] = useState(null);

  useEffect(() => {
    async function getBeachData(beachId) {
      const servicesItems = (await getSingleData('services', beachId)).result;
      console.log('getting beachdata');
      console.log(servicesItems);
      setBeachData(servicesItems);
    }

    getBeachData(params.beachId);
  }, [getSingleData]);

  // async function getBeachData(beachId) {
  //   const servicesItems = (await getSingleData('services', beachId)).result;
  //   console.log('getting beachdata');
  //   console.log(servicesItems);
  //   setBeachData(servicesItems);
  // }

  // getBeachData(params.beachId);

  //console.log('Beach ID:', beachData);

  return (
    <div>
      {beachData ? (
        <ItemForm itemName='Beach' itemId={params.beachId} page='Edit' itemsData={beachData} />
      ) : null}
    </div>
  );
};

export default EditPage;
