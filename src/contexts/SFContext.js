import React, { createContext, useContext, useState } from 'react';

const SFContext = createContext();

export function SFProvider({ children }) {
  const [sortOrder, setSortOrder] = useState('asc'); // Default is ascending
  const [sortType, setSortType] = useState(null);

  const toggleSortOrder = (type) => {
    setSortType(type);
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <SFContext.Provider value={{ sortOrder, toggleSortOrder }}>
      {children}
    </SFContext.Provider>
  );
}

export default SFContext;
