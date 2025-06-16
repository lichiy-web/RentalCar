import { ErrorMessage, Field } from 'formik';
import css from './FormattedField.module.css';

const FormattedField = ({ name, formatInput, ...props }) => {
  const handleChange = (e, name, setFieldValue) => {
    const formattedValue = formatInput(e.target.value);
    setFieldValue(name, formattedValue);
  };

  return (
    <div className={css.formattedFieldContainer}>
      <Field name={name}>
        {({ field, form }) => (
          <input
            id={name}
            {...field}
            {...props}
            onChange={e => handleChange(e, name, form.setFieldValue)}
          />
        )}
      </Field>
      <ErrorMessage className={css.errorMessage} name={name} component="div" />
    </div>
  );
};
export default FormattedField;
