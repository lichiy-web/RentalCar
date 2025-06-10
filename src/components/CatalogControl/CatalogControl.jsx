import { Field, Form, Formik } from 'formik';
import css from './CatalogControl.module.css';
import * as Yup from 'yup';

const initialValues = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const catalogFormSchema = Yup.object().shape({
  brand: Yup.number(),
  rentalPrice: Yup.number(),
  minMileage: Yup.number(),
  maxMileage: Yup.number(),
});

const CatalogControl = () => {
  <Formik
    initialValues={initialValues}
    validationSchema={catalogFormSchema}
    onSubmit={handleSubmit}
  >
    <Form>
      <label className={css.formItem}>
        <span className={css.inputTitle}>Brand</span>
        <Field className={css.inputItem} type="text" name="brand" />
      </label>
    </Form>
  </Formik>;
};
export default CatalogControl;
