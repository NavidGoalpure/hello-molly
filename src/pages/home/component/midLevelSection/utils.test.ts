import { Devices } from '../../../../interfaces';
import { ISelectedNode } from '../../interfaces';
import { getSlidesNumber, isThisNodeSelected } from './utils';

describe('getSlidesNumber function', () => {
  it('should return 3 for LAPTOP device', () => {
    const device = Devices.LAPTOP;
    const result = getSlidesNumber(device);
    expect(result).toBe(3);
  });

  it('should return 2 for TABLET device', () => {
    const device = Devices.TABLET;
    const result = getSlidesNumber(device);
    expect(result).toBe(2);
  });
});

describe('isThisNodeSelected function', () => {
  it('should return true when the node is selected', () => {
    const index = 1;
    const selectedNode: ISelectedNode = { row: 2, column: 2 };
    const result = isThisNodeSelected({ index, selectedNode });
    expect(result).toBe(true);
  });

  it('should return false when the node is not selected', () => {
    const index = 1;
    const selectedNode: ISelectedNode = { row: 3, column: 2 };
    const result = isThisNodeSelected({ index, selectedNode });
    expect(result).toBe(false);
  });

  it('should return false when the selectedNode is null', () => {
    const index = 1;
    const selectedNode: ISelectedNode | null = null;
    const result = isThisNodeSelected({ index, selectedNode });
    expect(result).toBe(false);
  });
});
