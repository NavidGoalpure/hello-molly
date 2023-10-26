import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { IEmployee } from '../../interfaces/employee';
import { getLowLevelChildrenIds } from './utils';

type Context = {
  isShowCeoChildren: boolean;
  setIsShowCeoChildren: Dispatch<SetStateAction<boolean>>;
  //
  showableLowLevels: string[];
  addChildrenToShowableList: (data: {
    parentId: string | undefined;
    lowLevelEmployees: IEmployee[];
  }) => void;
  removeChildrenFromShowableList: (data: {
    parentId: string | undefined;
    lowLevelEmployees: IEmployee[];
  }) => void;
};

type Props = {
  children: React.ReactNode;
};

const ShowableContext = createContext({} as Context);

function ShowableContextProvider({ children }: Props) {
  const [isShowCeoChildren, setIsShowCeoChildren] = useState<boolean>(false);
  const [showableLowLevels, setShowableLowLevels] = useState<string[]>([]);

  //Handlers/////////
  function addChildrenToShowableList({
    parentId,
    lowLevelEmployees,
  }: {
    parentId: string | undefined;
    lowLevelEmployees: IEmployee[];
  }) {
    if (!parentId) return null;
    const nodeChildren = getLowLevelChildrenIds({
      parentId,
      lowLevelEmployees,
    });
    setShowableLowLevels([...showableLowLevels, ...nodeChildren]);
  }
  //
  function removeChildrenFromShowableList({
    parentId,
    lowLevelEmployees,
  }: {
    parentId: string | undefined;
    lowLevelEmployees: IEmployee[];
  }) {
    if (!parentId) return null;
    const nodeChildren = getLowLevelChildrenIds({
      parentId,
      lowLevelEmployees,
    });
    const updatedShowableLowLevels = showableLowLevels.filter(
      (id) => !nodeChildren.includes(id)
    );

    setShowableLowLevels(updatedShowableLowLevels);
  }
  ////////////////////

  return (
    <ShowableContext.Provider
      value={{
        isShowCeoChildren,
        setIsShowCeoChildren,
        showableLowLevels,
        addChildrenToShowableList,
        removeChildrenFromShowableList,
      }}
    >
      {children}
    </ShowableContext.Provider>
  );
}

export { ShowableContextProvider, ShowableContext };
