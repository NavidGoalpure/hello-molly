import { ISelectedNode } from '../../interfaces';
import { isCeoSelected } from './utils';

describe('isCeoSelected function', () => {
  it('should return true if selectedNode row is 1', () => {
    const selectedNode: ISelectedNode = { row: 1, column: 2 };
    const result = isCeoSelected(selectedNode);
    expect(result).toBe(true);
  });

  it('should return false if selectedNode is null', () => {
    const selectedNode = null;
    const result = isCeoSelected(selectedNode);
    expect(result).toBe(false);
  });

  it('should return false if selectedNode row is not 1', () => {
    const selectedNode: ISelectedNode = { row: 2, column: 3 };
    const result = isCeoSelected(selectedNode);
    expect(result).toBe(false);
  });
});
