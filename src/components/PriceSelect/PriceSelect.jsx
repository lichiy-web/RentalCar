import { useDispatch } from 'react-redux';
import css from './PriceSelect.module.css';
import Select from 'react-select';
import DropdownIndicator from '../DropdownIndicator/DropdownIndicator';
import { useField, useFormikContext } from 'formik';
import { resetCatalogControls } from '../../redux/catalog/slice';
import { setFilter } from '../../redux/filters/slice';
import { components } from 'react-select';
import { createOption } from '../../utilits/utilits';

const FormattedSingleValue = props => {
  return (
    <components.SingleValue {...props}>
      To ${props.data.label}
    </components.SingleValue>
  );
};

const priceFrom = 30;
const priceStep = 10;
const totalItems = 20;
const options = Array(totalItems)
  .fill(0)
  .map((_, i) => createOption(priceFrom + i * priceStep));
const defaultValue = { value: '', label: 'Choose a price' };

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'var(--white)',
    color:
      state.isFocused || state.isSelected
        ? 'var(--black)'
        : 'var(--select-options-color)',
    fontFamily: 'var(--font-family)',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    padding: 0,
    marginBottom: '.2rem',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'var(--wite)',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'var(--wite)',
    },
  }),
  control: provided => ({
    ...provided,
    width: '12.75rem',
    fontFamily: 'var(--font-family)',
    fontWeight: 500,
    color: 'var(--black)',
    lineHeight: '1.25',
    borderRadius: '.75rem',
    height: '2.75rem',
    backgroundColor: 'var(--input-color)',
    borderColor: 'transparent',
    '&:hover': {
      borderColor: 'transparent',
      cursor: 'pointer',
    },
    boxShadow: 'none',
  }),
  singleValue: provided => ({
    ...provided,
    fontFamily: 'var(--font-family)',
    fontWeight: 500,
    color: 'var(--black)',
  }),
  placeholder: provided => ({
    ...provided,
    color: 'var(--black)',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '.75em',
    padding: '.875rem .5rem .875rem 1.125rem',
    maxHeight: '11.77rem',
    marginTop: '.25rem',
  }),
  menuList: provided => ({
    ...provided,
    gap: '.5rem',
    '&::-webkit-scrollbar': {
      width: '.5rem',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(--select-scroll)',
      borderRadius: '4px',
    },
    maxHeight: '10rem',
    padding: 0,
  }),
  indicatorsContainer: provided => ({
    ...provided,
    paddingRight: '.75rem',
  }),
  valueContainer: provided => ({
    ...provided,
    paddingLeft: '1rem',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  clearIndicator: provided => ({
    ...provided,
    paddingRight: 0,
  }),
};

const PriceSelect = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const dispatch = useDispatch();
  return (
    <>
      <Select
        className={css.priceSelectContainer}
        options={options}
        styles={customStyles}
        components={{
          DropdownIndicator,
          SingleValue: FormattedSingleValue,
        }}
        onChange={option => {
          if (!option) {
            dispatch(resetCatalogControls());
            dispatch(setFilter({ name: 'rentalPrice', value: '' }));
          }
          setFieldValue(name, option);
        }}
        value={field.value}
        isClearable
        placeholder={defaultValue.label}
        {...props}
      />
      {meta.touched && meta.error && (
        <div style={{ color: 'red', fontSize: '0.8rem' }}>{meta.error}</div>
      )}
    </>
  );
};
export default PriceSelect;
