import { IEmployee } from '../../../../interfaces/employee';
import EmployeeCard from '../employeeCard';
import { styled } from '@mui/material';
import { useContext } from 'react';
import { ShowableContext } from '../../../../contexts/showableContext';

interface Props {
  employee: IEmployee | undefined;
}

export default function CeoSection({ employee }: Props) {
  const { setIsShowCeoChildren } = useContext(ShowableContext);
  if (!employee) return null;

  const handleExpandLess = () => setIsShowCeoChildren(false);
  const handleExpandMore = () => setIsShowCeoChildren(true);

  //
  return (
    <CeoContainer>
      <EmployeeCard
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
