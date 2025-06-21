import * as Yup from 'yup';

/**
 * The config object for creating initialValues, validationSchema and Field componets in Formik Form
 */
export const formConfig = [
  {
    name: 'name',
    initialValue: '',
    type: 'text',
    placeholder: 'Name*',
    validation: Yup.string('Must be a string')
      .min(2, 'Name must be at least 2 letters long')
      .max(30, 'Name must not be more than 30 letters long')
      .required('Name is a required field'),
  },
  {
    name: 'email',
    initialValue: '',
    type: 'email',
    placeholder: 'Email*',
    validation: Yup.string()
      .email('Must be a valid email')
      .required('Email is a required field'),
  },
  {
    name: 'dateRange',
    initialValue: [null, null],
    type: 'date',
    placeholder: 'Booking Date',
    // validation: Yup.date().nullable(),
    validation: Yup.array().of(Yup.date().nullable()),
  },
  {
    name: 'comment',
    initialValue: '',
    type: 'textarea',
    placeholder: 'Comment',
    validation: Yup.string().max(256, 'Comment must not exceed 256 characters'),
  },
];
