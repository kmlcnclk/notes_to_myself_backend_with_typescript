import * as yup from 'yup';

export const registerSchema = yup.object({
  body: yup.object({
    firstName: yup.string().required('FirstName is required'),
    lastName: yup.string(),
    email: yup
      .string()
      .email('Email form is not correct')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  }),
});

export const loginSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email('Email form is not correct')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  }),
});

export const updateSchema = yup.object({
  body: yup.object({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email('Email form is not correct'),
    password: yup.string().min(6, 'Password must be at least 6 characters'),
  }),
});
