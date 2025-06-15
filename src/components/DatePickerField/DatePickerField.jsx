import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ field, form, placeholder, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [justSelected, setJustSelected] = useState(false);
  const { name, value } = field;
  return (
    <DatePicker
      {...props}
      selected={value || null}
      placeholderText={placeholder}
      isClearable
      closeOnSelect
      popperPlacement="bottom-start"
      open={console.log({ isOpen }) || isOpen}
      dateFormat="dd.MM.yyyy"
      onChange={date => {
        form.setFieldValue(name, date);
        setIsOpen(false);
      }}
      onClickOutside={() => setIsOpen(false)}
      onSelect={() => {
        setJustSelected(true);
        setIsOpen(false);
      }}
      onInputClick={() => {
        if (justSelected) {
          setJustSelected(false);
          return;
        }
        setIsOpen(true);
      }}
    />
  );
};
export default DatePickerField;
