import { IDepartment } from '../../../../interfaces/employee';

export function getColorBaseOnDepartment(
  department: IDepartment | undefined
): string | undefined {
  if (department === IDepartment.DEVELOPMENT) return '#d7d7ff';
  if (department === IDepartment.MARKETING) return '#f5d2f0';
  if (department === IDepartment.RESEARCH) return '#aef2cc';
  return undefined;
}
