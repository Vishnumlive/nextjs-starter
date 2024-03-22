import React from 'react';

import ItemsList from '@/components/Items/ItemsList';

const BeachPage = ({ params: { lng } }) => {
  return <ItemsList lang={lng} itemName='Beach' />;
};

export default BeachPage;
