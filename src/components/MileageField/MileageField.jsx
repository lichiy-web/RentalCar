import { formatInput } from '../../utilits/utilits';
import FormattedField from '../FormattedField/FormattedField';
import css from './MileageField.module.css';

const MileageField = () => {
  return (
    <div className={css.mileageFieldContainer}>
      <FormattedField
        placeholder="From"
        name="minMileage"
        formatInput={formatInput('From')}
        className={css.mileageField}
      />
      <div className={css.mileageSeparator}></div>
      <FormattedField
        placeholder="To"
        name="maxMileage"
        formatInput={formatInput('To')}
        className={css.mileageField}
      />
    </div>
  );
};
export default MileageField;
