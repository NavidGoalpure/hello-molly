import { Devices } from '../../../../interfaces';
import { IEmployee } from '../../../../interfaces/employee';
import { ISelectedNode } from '../../interfaces';

export function getSlidesNumber(device: Devices): number {
  if (device === Devices.LAPTOP) return 3;
  if (device === Devices.TABLET) return 2;
  return 1;
}
export function isThisNodeSelected({
  index,
  selectedNode,
}: {
  index: number;
  selectedNode: ISelectedNode | null;
}): boolean {
  if (selectedNode?.row === 2 && selectedNode?.column === index + 1)
    return true;
  return false;
}
