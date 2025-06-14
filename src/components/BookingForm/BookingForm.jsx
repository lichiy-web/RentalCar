import { ErrorMessage, Field, Formik } from 'formik';
import css from './BookingForm.module.css';
import { Form } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

const formConfig = [
  { fieldName: 'name', initialValue: '', type: 'text', placeholder: 'Name*' },
  {
    fieldName: 'email',
    initialValue: '',
    type: 'email',
    placeholder: 'Email*',
  },
  {
    fieldName: 'date',
    initialValue: new Date(),
    type: 'date',
    placeholder: 'Booking Date',
  },
  {
    fieldName: 'comment',
    initialValue: new Date(),
    type: 'textarea',
    placeholder: 'Comment',
  },
];

const DatePickerField = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      {...props}
    />
  );
};

const fieldItem = ({ name, type, title, placeholder = '', ...props }) => {
  return (
    <label className={css.fieldItem}>
      <span className={css.fieldTitle}>{title}</span>
      {type === 'date' ? (
        <DatePickerField
          className={css.field}
          name={name}
          placeholderText={placeholder}
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
      <ErrorMessage className={css.fieldErrorMessage} name={name} />
    </label>
  );
};

const BookingForm = props => {
  return (
    <div className={css.bookingFromContainer} {...props}>
      <h2>Booking Form</h2>
      <Formik>
        <Form>
          <fieldItem />
          <label className={css.fieldItem}>
            <span className={css.fieldTitle}></span>
            <Field className={css.field} name="" type="" />
            <ErrorMessage className={css.fieldErrorMessage} name="" />
          </label>
        </Form>
      </Formik>
    </div>
  );
};
export default BookingForm;
