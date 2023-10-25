import { IOrganizationStructure } from '../../interfaces/employee';
import mockData from './constants';
import { validateAndSendErrors } from '../utils';
import { organizationSchema } from './yupSchema';

export const fetchOrganizationData =
  async (): Promise<IOrganizationStructure> => {
    return new Promise(async (resolve, reject) => {
      setTimeout(async () => {
        try {
          const organizationData = (await mockData) as IOrganizationStructure;
          resolve(organizationData); // Resolve the Promise if validation succeeds
        } catch (error) {
          reject(error); // Reject the Promise if validation fails
        }
        //navid change that
      }, 0); // 5-second delay
    });
  };
