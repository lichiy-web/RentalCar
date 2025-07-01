import { useDispatch } from 'react-redux';
import { fetchBrands } from '../../redux/catalog/operations';
import css from './BrandSelect.module.css';
import AsyncSelect from 'react-select/async';
import DropdownIndicator from '../DropdownIndicator/DropdownIndicator';
import { useField, useFormikContext } from 'formik';
import { resetCatalogControls } from '../../redux/catalog/slice';
import { setFilter } from '../../redux/filters/slice';
import clsx from 'clsx';

const createOption = label => ({ value: label.toLowerCase(), label });
const defaultValue = { value: '', label: 'Choose a brand' };

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
        classNames={selectClassNames}
        loadOptions={loadOptions}
        defaultOptions
        cacheOptions
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
