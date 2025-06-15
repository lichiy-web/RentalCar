import * as Yup from 'yup';

export const formConfig = [
  {
    name: 'name',
    initialValue: '',
    type: 'text',
    placeholder: 'Name*',
    validation: Yup.string().required(),
  },
  {
    name: 'email',
    initialValue: '',
    type: 'email',
    placeholder: 'Email*',
    validation: Yup.string().email().required(),
  },
  {
    name: 'date',
    initialValue: null,
    type: 'date',
    placeholder: 'Booking Date',
    validation: Yup.date().nullable(),
  },
  {
    name: 'comment',
    initialValue: '',
    type: 'textarea',
    placeholder: 'Comment',
    validation: Yup.string().max(128),
  },
];
