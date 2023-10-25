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
  department?: IDepartment;
  avatar: string;
};
export type IOrganizationStructure = {
  ceo: IEmployee;
  midLevels: IEmployee[];
  lowLevel: IEmployee[];
};
