import { Form, Formik } from 'formik';
import css from './CatalogControl.module.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import BrandSelect from '../BrandSelect/BrandSelect';
import { resetCatalogControls } from '../../redux/catalog/slice';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';

const catalogFormSchema = Yup.object().shape({
  brand: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string(),
    })
    .nullable(),
  rentalPrice: Yup.number().nullable(),
  minMileage: Yup.number().nullable(),
  maxMileage: Yup.number().nullable(),
});

const CatalogControl = () => {
  const filters = useSelector(selectFilters);
  const initialValues = {
    brand: filters.brand,
    rentalPrice: null,
    minMileage: null,
    maxMileage: null,
  };

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
        <label className={css.inputItem}>
          <div className={css.inputTitle}>Car brand</div>
          <BrandSelect name="brand" />
        </label>

        <button type="submit" className={css.submitBtn}>
          Search
        </button>
      </Form>
    </Formik>
  );
};
export default CatalogControl;
