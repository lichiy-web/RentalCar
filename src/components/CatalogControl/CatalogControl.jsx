import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './CatalogControl.module.css';
import * as Yup from 'yup';
import { fetchCars } from '../../redux/catalog/operations';
import { useDispatch } from 'react-redux';
// import { selectBrands } from '../../redux/catalog/selectors';
import BrandSelect from '../BrandSelect/BrandSelect';

const initialValues = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const catalogFormSchema = Yup.object().shape({
  brand: Yup.string(),
  rentalPrice: Yup.number(),
  minMileage: Yup.number(),
  maxMileage: Yup.number(),
});

const CatalogControl = () => {
  // const brands = useSelector(selectBrands);
  const dispatch = useDispatch();
  const handleSubmit = (filters, action) => {
    dispatch(fetchCars(filters));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={catalogFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {/* <label className={css.formItem}>
          <span className={css.inputTitle}>Brand</span>
          <Field className={css.inputItem} name="brand" component="select">
            <option value="">Choose a brand</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
          <ErrorMessage
            className={css.errorMessage}
            name="brand"
            component="span"
          />
        </label> */}
        <BrandSelect />
      </Form>
    </Formik>
  );
};
export default CatalogControl;
