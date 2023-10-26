import React, { useState } from 'react';

type Context = {
  selectedEmployee: string;
  setSelectedEmployee: React.Dispatch<React.SetStateAction<string>>;
};
type Props = {
  children: React.ReactNode;
};

const NavigationContext = React.createContext({} as Context);
function NavigationContextProvider({ children }: Props) {
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  ///////////////////
  return (
    <NavigationContext.Provider
      value={{
        selectedEmployee,
        setSelectedEmployee,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
export { NavigationContextProvider, NavigationContext };
