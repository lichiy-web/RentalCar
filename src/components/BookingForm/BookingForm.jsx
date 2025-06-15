import { ErrorMessage, Field, Formik, Form } from 'formik';
import css from './BookingForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import clsx from 'clsx';

const formConfig = [
  { name: 'name', initialValue: '', type: 'text', placeholder: 'Name*' },
  {
    name: 'email',
    initialValue: '',
    type: 'email',
    placeholder: 'Email*',
  },
  {
    name: 'date',
    initialValue: '',
    type: 'date',
    placeholder: 'Booking Date',
  },
  {
    name: 'comment',
    initialValue: '',
    type: 'textarea',
    placeholder: 'Comment',
  },
];

const initialValues = formConfig.reduce((init, { name, initialValue }) => {
  init[name] = initialValue;
  return init;
}, {});

const bookingFormSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  date: Yup.date(),
  comment: Yup.string().max(128),
});

console.log({ initialValues });

const DatePickerField = ({ field, form, placeholder, ...props }) => {
  console.log('In DatePicker!', { field, form, props });
  return (
    <div className="datePickerContainer">
      <DatePicker
        selected={field.value}
        placeholderText={placeholder}
        dateFormat="dd.MM.yyyy"
        onChange={date => {
          console.log({ name: field.name, date });
          form.setFieldValue(field.name, date);
        }}
      />
    </div>
  );
};

const FieldItem = ({ name, type, title, placeholder = '', ...props }) => {
  return (
    <label className={css.fieldItem}>
      <div className={css.fieldTitle}>{title}</div>
      {type === 'date' ? (
        <Field
          className={css.field}
          name={name}
          placeholder={placeholder}
          component={DatePickerField}
          {...props}
        />
      ) : (
        <Field
          className={css.field}
          name={name}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      )}
      <ErrorMessage
        className={css.fieldErrorMessage}
        name={name}
        component="div"
      />
    </label>
  );
};

const handleSubmit = ({ name, email, date, comment }, actions) => {
  console.log('In BookingFrom', { name, email, date, comment });
  toast(
    `Thank you. ${name} for booking car at ${date}! \n Details has just sent to your email: ${email}. Check it out. \n We'll count yor note "${comment}."`
  );
  actions.resetForm();
};

const BookingForm = props => {
  return (
    <div className={css.bookingFromContainer} {...props}>
      <h2 className={css.bookingFormTitle}>Booking Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={bookingFormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {formConfig.map(field => (
            <FieldItem key={field.name} {...field} />
          ))}
          <button className={clsx(css.submitBtn, 'button')} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default BookingForm;
