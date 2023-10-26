import { IEmployee } from '../../../../interfaces/employee';

export function getLowLevelChildrenIds({
  parentId,
  lowLevelEmployees,
}: {
  parentId: string;
  lowLevelEmployees: IEmployee[];
}): string[] {
  if (!lowLevelEmployees) {
    return [];
  }

  const childrenIds: string[] = [];

  // Iterate through the lowLevel employees to find children of the midLevel employee
  lowLevelEmployees.forEach((lowLevelEmployee) => {
    if (lowLevelEmployee.parentId === parentId) {
      childrenIds.push(lowLevelEmployee.id);
    }
  });

  return childrenIds;
}
/////
