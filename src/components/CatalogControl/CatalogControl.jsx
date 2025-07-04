import { Form, Formik } from 'formik';
import css from './CatalogControl.module.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import BrandSelect from '../BrandSelect/BrandSelect';
import { resetCatalogControls } from '../../redux/catalog/slice';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';
import PriceSelect from '../PriceSelect/PriceSelect';
import MileageField from '../MileageField/MileageField';
import { formatInput } from '../../utilits/utilits';
import clsx from 'clsx';

const catalogFormSchema = Yup.object().shape({
  brand: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string(),
    })
    .nullable(),
  rentalPrice: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string(),
    })
    .nullable(),
  minMileage: Yup.string().nullable(),
  maxMileage: Yup.string().nullable(),
});

const CatalogControl = () => {
  let filters = useSelector(selectFilters);

  let initialValues = { ...filters };
  initialValues.minMileage = formatInput('From')(filters.minMileage);
  initialValues.maxMileage = formatInput('To')(filters.maxMileage);

  const dispatch = useDispatch();
  const handleSubmit = filters => {
    dispatch(resetCatalogControls());
    dispatch(changeFilter(filters));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={catalogFormSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form className={css.catalogControl}>
        <div className={css.selectWrapper}>
          <label className={clsx(css.inputItem, css.brandSelect)}>
            <div className={css.inputTitle}>Car brand</div>
            <BrandSelect name="brand" />
          </label>
          <label className={clsx(css.inputItem, css.priceSelect)}>
            <div className={css.inputTitle}>Price/ 1 hour</div>
            <PriceSelect name="rentalPrice" />
          </label>
        </div>
        <label className={clsx(css.inputItem, css.inputMileage)}>
          <div className={css.inputTitle}>Сar mileage / km</div>
          <MileageField />
        </label>

        <button type="submit" className={clsx(css.submitBtn, 'button')}>
          Search
        </button>
      </Form>
    </Formik>
  );
};
export default CatalogControl;
