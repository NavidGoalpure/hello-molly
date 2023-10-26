import { ISelectedNode } from '../../interfaces';

export function isCeoSelected(selectedNode: ISelectedNode | null): boolean {
  if (selectedNode?.row === 1) return true;
  return false;
}
