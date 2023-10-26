import { getLowLevelChildrenIds } from './utils';

describe('getLowLevelChildrenIds function', () => {
  it('should return an empty array when no lowLevel employees are provided', () => {
    const parentId = '1';
    const lowLevelEmployees = null; // No lowLevel employees
    //@ts-ignore
    const result = getLowLevelChildrenIds({ parentId, lowLevelEmployees });
    expect(result).toEqual([]);
  });

  it('should return an empty array when there are no children for the given parentId', () => {
    const parentId = '1';
    const lowLevelEmployees = [
      { id: '2', parentId: '3' },
      { id: '3', parentId: '4' },
    ]; // No children for the provided parentId
    //@ts-ignore
    const result = getLowLevelChildrenIds({ parentId, lowLevelEmployees });
    expect(result).toEqual([]);
  });

  it('should return an array of children ids for the given parentId', () => {
    const parentId = '1';
    const lowLevelEmployees = [
      { id: '2', parentId: '1' },
      { id: '3', parentId: '1' },
      { id: '4', parentId: '2' },
    ]; // Some children with matching parentId
    //@ts-ignore
    const result = getLowLevelChildrenIds({ parentId, lowLevelEmployees });
    expect(result).toEqual(['2', '3']);
  });
});
