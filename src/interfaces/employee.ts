export enum IDepartment {
  MARKETING = 'MARKETING',
  DEVELOPMENT = 'DEVELOPMENT',
  RESEARCH = 'RESEARCH',
}
export type IEmployee = {
  id: string;
  parentId: string | null;
  name: string;
  role: string;
  department: IDepartment;
};
type ICeo = Omit<IEmployee, 'department'>;
export type IOrganizationStructure = {
  ceo: ICeo;
  midLevels: IEmployee[];
  lowLevel: IEmployee[];
};
