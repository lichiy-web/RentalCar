import { ErrorMessage, Field } from 'formik';
import DatePickerField from '../DatePickerField/DatePickerField';

const FieldItem = ({
  name,
  type,
  label,
  placeholder = '',
  className,
  classes,
  ...props
}) => {
  const inputTypes = [
    'button',
    'checkbox',
    'color',
    'email',
    'file',
    'image',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
  ];
  return (
    <label className={className}>
      <div className={classes?.label}>{label}</div>
      {inputTypes.includes(type) ? (
        <Field
          className={classes?.field}
          name={name}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <Field
          className={classes?.field}
          name={name}
          placeholder={placeholder}
          component={type === 'date' ? DatePickerField : type}
          {...props}
        />
      )}
      <ErrorMessage className={classes?.error} name={name} component="div" />
    </label>
  );
};
export default FieldItem;
