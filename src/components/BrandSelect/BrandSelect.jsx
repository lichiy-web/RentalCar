import { useDispatch } from 'react-redux';
import { fetchBrands } from '../../redux/catalog/operations';
import css from './BrandSelect.module.css';
import AsyncSelect from 'react-select/async';
import DropdownIndicator from '../DropdownIndicator/DropdownIndicator';
import { useField, useFormikContext } from 'formik';
import { resetCatalogControls } from '../../redux/catalog/slice';
import { setFilter } from '../../redux/filters/slice';

const createOption = label => ({ value: label.toLowerCase(), label });
const defaultValue = { value: '', label: 'Choose a brand' };

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
    width: '12.75em',
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
    maxHeight: '17rem',
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
    maxHeight: '15.25rem',
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

const BrandSelect = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const dispatch = useDispatch();
  const loadOptions = () =>
    dispatch(fetchBrands())
      .unwrap()
      .then(brands => brands.map(brand => createOption(brand)));
  return (
    <>
      <AsyncSelect
        className={css.brandSelectContainer}
        loadOptions={loadOptions}
        defaultOptions
        cacheOptions
        styles={customStyles}
        components={{ DropdownIndicator }}
        onChange={option => {
          if (!option) {
            dispatch(resetCatalogControls());
            dispatch(setFilter({ name: 'brand', value: '' }));
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
export default BrandSelect;
