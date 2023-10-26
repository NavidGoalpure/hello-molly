import { IOrganizationStructure } from '../interfaces/employee';
import axios from 'axios';
import * as yup from 'yup';

export async function validateAndSendErrors(
  objForValidation: IOrganizationStructure,
  yupSchema: yup.ObjectSchema<any>
): Promise<IOrganizationStructure> {
  try {
    const res = await yupSchema.validate(objForValidation, {
      abortEarly: false,
    });
    return res;
  } catch (validationError: any) {
    // Explicitly define the type as 'any'
    // Send the validation errors to the specified endpoint
    console.log('Validation error:', validationError);

    try {
      await axios.post('some-reporting-enpoint', validationError.errors);
      console.log('Validation errors have been sent to the endpoint.');
      throw validationError;
    } catch (error) {
      console.error('Error sending validation errors:', error);
      throw error;
    }
  }
}
