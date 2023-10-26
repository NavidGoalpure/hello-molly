import React, { useState } from 'react';
import { ISelectedNode } from '../interfaces';

type Context = {
  selectedNode: ISelectedNode | null;
  setSelectedNode: React.Dispatch<React.SetStateAction<ISelectedNode | null>>;
};
type Props = {
  children: React.ReactNode;
};

const NavigationContext = React.createContext({} as Context);
function NavigationContextProvider({ children }: Props) {
  const [selectedNode, setSelectedNode] = useState<ISelectedNode | null>(null);
  ///////////////////
  return (
    <NavigationContext.Provider
      value={{
        selectedNode,
        setSelectedNode,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
export { NavigationContextProvider, NavigationContext };
