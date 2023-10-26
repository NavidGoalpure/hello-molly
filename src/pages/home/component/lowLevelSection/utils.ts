import { Devices } from '../../../../interfaces';
import { IEmployee } from '../../../../interfaces/employee';
import { ISelectedNode } from '../../interfaces';

export function getSlidesNumber(device: Devices): number {
  if (device === Devices.LAPTOP) return 4;
  if (device === Devices.TABLET) return 2;
  return 1;
}
export function shouldComponentBeDisplayed({
  employees,
  showableLowLevels,
  isShowCeoChildren,
}: {
  employees: IEmployee[] | undefined;
  showableLowLevels: string[];
  isShowCeoChildren: boolean;
}): boolean {
  if (
    !employees ||
    employees.length === 0 ||
    showableLowLevels.length === 0 ||
    !isShowCeoChildren
  )
    return false;
  return true;
}
export function isThisNodeSelected({
  index,
  selectedNode,
}: {
  index: number;
  selectedNode: ISelectedNode | null;
}): boolean {
  if (selectedNode?.row === 3 && selectedNode?.column === index + 1)
    return true;
  return false;
}
