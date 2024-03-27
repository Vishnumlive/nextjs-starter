'use client';
import React from 'react';

import ItemForm from '@/components/Items/ItemForm';

const addBeach = () => {
  const itemsData = {};

  return (
    <div>
      <ItemForm
        page='Add'
        itemId={null}
        itemName='Beach'
        itemsData={itemsData}
      />
    </div>
  );
};

export default addBeach;
