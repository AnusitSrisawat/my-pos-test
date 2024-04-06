import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the item type
interface Item {
  id: number;
  name: string;
}

// Define the context type
interface DataContextType {
  items: Item[];
  updateItems: (newItems: Item[]) => void;
}

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Custom hook to use the data context
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// DataProvider component
interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Update items and localStorage
  const updateItems = (newItems: Item[]): void => {
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const contextValue: DataContextType = {
    items,
    updateItems,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
