import { Formik, Form } from 'formik';
import css from './BookingForm.module.css';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import FieldItem from '../FieldItem/FieldItem';
import { createInitialValues, createSchema } from '../../utilits/forms';
import { formConfig } from './formConfig';

const initialValues = createInitialValues(formConfig);
const bookingFormSchema = createSchema(formConfig);

const handleSubmit = ({ name, email, date }, actions) => {
  toast(
    `Thank you. ${name} for booking the car${
      date && ' at ' + Intl.DateTimeFormat('uk-UA').format(date)
    }! \n  Details has just sent to your email: ${email}. Check it out.`
  );
  actions.resetForm();
};

const BookingForm = props => {
  return (
    <div className={css.bookingFormContainer} {...props}>
      <div className={css.formHeader}>
        <h2 className={css.bookingFormTitle}>Booking Form</h2>
        <p className={css.formMoto}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={bookingFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.bookingForm}>
          {formConfig.map(field => (
            <FieldItem
              key={field.name}
              className={clsx(css.itemContainer, css[`${field.name}Item`])} // classes that will be asigned to the field container div
              classes={{
                label: clsx(css.label, css[`${field.name}Label`]), // classes that will be asigned to the div.label
                field: clsx(css.field, css[`${field.name}Field`]), // classes that will be asigned to the Field components
                error: clsx(css.error, css[`${field.name}Error`]), // classes that will be asigned to the div.error
              }}
              {...field}
            />
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
