import * as Yup from 'yup';

/**
 * @typedef {Object} FormConfigType
 * @property {string} name - the field name
 * @property {any} initialValue - an initial Value for appropriate field
 * @property {string} type - type of Field component, for exsample, "text", "email", "textarea" etc
 * @property {string} placeholder - a placeholder for the field
 * @property {Yup.InferType<typeof schema>} validation - Yup schema object for the field
 * @property {string} label - a label name for the field input
 */

/**
 *
 * @param {FormConfigType} formConfig
 * @returns {Object} The initialValues object for the Formik form
 */
export const createInitialValues = formConfig =>
  formConfig.reduce((init, { name, initialValue }) => {
    init[name] = initialValue;
    return init;
  }, {});

/**
 *
 * @param {FormConfigType} formConfig
 * @returns {Yup.InferType<typeof schema>} The Yup validation schema object
 */
export const createSchema = formConfig =>
  Yup.object().shape(
    formConfig.reduce((shape, { name, validation }) => {
      shape[name] = validation;
      return shape;
    }, {})
  );
