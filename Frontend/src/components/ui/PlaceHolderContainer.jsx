// components/layout/PlaceHolderContainer.jsx

import React from 'react';
import PlaceHolder from '../ui/PlaceHolder';

const PlaceHolderContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {[...Array(6)].map((_, index) => (
        <PlaceHolder key={index} />
      ))}
    </div>
  );
};

export default PlaceHolderContainer;
