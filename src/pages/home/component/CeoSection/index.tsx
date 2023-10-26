import { IEmployee } from '../../../../interfaces/employee';
import { useContext } from 'react';
import { ShowableContext } from '../../contexts/showableContext';
import EmployeeCard from '../employeeCard';
import { styled } from '@mui/material';
import { isCeoSelected } from './utils';
import { NavigationContext } from '../../contexts/navigationContext';

interface Props {
  employee: IEmployee | undefined;
}

export default function CeoSection({ employee }: Props) {
  const { selectedNode, setSelectedNode } = useContext(NavigationContext);
  const { setIsShowCeoChildren } = useContext(ShowableContext);

  // Check if the employee data is available
  if (!employee) return null;

  const handleExpandLess = () => setIsShowCeoChildren(false);
  const handleExpandMore = () => setIsShowCeoChildren(true);

  // Check if the CEO is selected
  const isSelected: boolean = isCeoSelected(selectedNode);

  // Toggle the selected node
  const toggleSelectedNode = () => {
    setSelectedNode(() => (isSelected ? null : { row: 1, column: 1 }));
  };

  return (
    <CeoContainer>
      {/* Render the EmployeeCard component with necessary props */}
      <EmployeeCard
        isSelected={isSelected}
        selectHandler={toggleSelectedNode}
        employee={employee}
        expandButton={{
          expandLessHandler: handleExpandLess,
          expandMoreHandler: handleExpandMore,
        }}
      />
    </CeoContainer>
  );
}

const CeoContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;
