import { useDispatch } from 'react-redux';
import css from './PriceSelect.module.css';
import Select from 'react-select';
import DropdownIndicator from '../DropdownIndicator/DropdownIndicator';
import { useField, useFormikContext } from 'formik';
import { resetCatalogControls } from '../../redux/catalog/slice';
import { setFilter } from '../../redux/filters/slice';
import { components } from 'react-select';
import { createOption } from '../../utilits/utilits';
import clsx from 'clsx';

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

const selectClassNames = {
  control: () => css.control,
  option: ({ isSelected, isFocused }) =>
    clsx(css.option, isSelected && css.selected, isFocused && css.focused),
  singleValue: () => css.singleValue,
  placeholder: () => css.placeholder,
  menu: () => css.menu,
  menuList: () => css.menuList,
  indicatorsContainer: () => css.indicatorsContainer,
  valueContainer: () => css.valueContainer,
  indicatorSeparator: () => css.indicatorSeparator,
  clearIndicator: () => css.clearIndicator,
};

const PriceSelect = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const dispatch = useDispatch();
  return (
    <>
      <Select
        className={css.priceSelectContainer}
        classNames={selectClassNames}
        options={options}
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
