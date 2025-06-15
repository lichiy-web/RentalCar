import { ArrowDownIcon, ArrowUpIcon } from '../Icon/Icon';
import css from './DropdownIndicator.module.css';
import { components } from 'react-select';

const DropdownIndicator = props => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? (
        <ArrowUpIcon className={css.icon} />
      ) : (
        <ArrowDownIcon className={css.icon} />
      )}
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
