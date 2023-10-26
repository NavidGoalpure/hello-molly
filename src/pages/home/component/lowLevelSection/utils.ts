import { Devices } from '../../../../interfaces';
import { IEmployee } from '../../../../interfaces/employee';

export function getSlidesNumber(device: Devices): number {
  if (device === Devices.LAPTOP) return 3;
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
