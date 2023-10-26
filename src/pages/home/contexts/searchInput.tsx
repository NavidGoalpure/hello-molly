import React, { useState } from 'react';

type Context = {
  searchedText: string;
  setSearchedText: React.Dispatch<React.SetStateAction<string>>;
};
type Props = {
  children: React.ReactNode;
};

const SearchInputContext = React.createContext({} as Context);
function SearchInputContextProvider({ children }: Props) {
  const [searchedText, setSearchedText] = useState<string>('');
  ///////////////////
  return (
    <SearchInputContext.Provider
      value={{
        searchedText,
        setSearchedText,
      }}
    >
      {children}
    </SearchInputContext.Provider>
  );
}
export { SearchInputContextProvider, SearchInputContext };
