import { IDepartment } from '../../../../interfaces/employee';
import { getColorBaseOnDepartment } from './utils';

describe('getColorBaseOnDepartment function', () => {
  it('should return the correct color for DEVELOPMENT department', () => {
    const department = 'DEVELOPMENT' as IDepartment;
    const result = getColorBaseOnDepartment(department);
    expect(result).toBe('#d7d7ff');
  });

  it('should return the correct color for MARKETING department', () => {
    const department = 'MARKETING' as IDepartment;
    const result = getColorBaseOnDepartment(department);
    expect(result).toBe('#f5d2f0');
  });

  it('should return the correct color for RESEARCH department', () => {
    const department = 'RESEARCH' as IDepartment;
    const result = getColorBaseOnDepartment(department);
    expect(result).toBe('#aef2cc');
  });

  it('should return undefined for an unknown department', () => {
    const department = 'SALES' as IDepartment; // An unknown department
    const result = getColorBaseOnDepartment(department);
    expect(result).toBeUndefined();
  });

  it('should return undefined for undefined department', () => {
    const department = undefined;
    const result = getColorBaseOnDepartment(department);
    expect(result).toBeUndefined();
  });
});
