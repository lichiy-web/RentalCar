import * as Yup from 'yup';

export const createInitialValues = formConfig =>
  formConfig.reduce((init, { name, initialValue }) => {
    init[name] = initialValue;
    return init;
  }, {});

export const createSchema = formConfig =>
  Yup.object().shape(
    formConfig.reduce((shape, { name, validation }) => {
      shape[name] = validation;
      return shape;
    }, {})
  );
