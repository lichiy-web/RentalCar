import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ field, form, placeholder, ...props }) => {
  // console.log()
  const [isOpen, setIsOpen] = useState(false);
  const [justSelected, setJustSelected] = useState(false);
  const {
    name,
    value: [startDate, endDate],
  } = field;
  const today = new Date();
  return (
    <DatePicker
      {...props}
      // selected={value || [null, null]}
      placeholderText={placeholder}
      isClearable
      closeOnSelect
      popperPlacement="bottom-start"
      open={isOpen}
      dateFormat="dd.MM.yyyy"
      startDate={startDate}
      endDate={endDate}
      selectsRange
      minDate={today}
      onChange={dateRange => {
        form.setFieldValue(name, dateRange);
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
