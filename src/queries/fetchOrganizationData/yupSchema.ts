import * as yup from 'yup';

export const organizationSchema = yup.object().shape({
  ceo: yup.object().shape({
    id: yup.string().required(),
    parentId: yup.string().nullable(),
    name: yup.string().required(),
    role: yup.string().required(),
  }),
  midLevels: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      parentId: yup.string().nullable(),
      name: yup.string().required(),
      role: yup.string().required(),
      department: yup.string().required(),
    })
  ),
  lowLevel: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      parentId: yup.string().nullable(),
      name: yup.string().required(),
      role: yup.string().required(),
      department: yup.string().required(),
    })
  ),
});
