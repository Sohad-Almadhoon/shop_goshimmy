import React, { createContext, useContext, useState } from "react";

interface FiltersContextProps {
  selectedFilters: Record<string, string>;
  handleFilterChange: (category: string, value: string) => void;
  removeFilter: (category: string) => void;
  clearFilters: () => void;
}

const FiltersContext = createContext<FiltersContextProps | undefined>(
  undefined
);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [category]: value }));
  };

  const removeFilter = (category: string) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      delete updatedFilters[category];
      return updatedFilters;
    });
  };

  const clearFilters = () => setSelectedFilters({});

  return (
    <FiltersContext.Provider
      value={{
        selectedFilters,
        handleFilterChange,
        removeFilter,
        clearFilters,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
