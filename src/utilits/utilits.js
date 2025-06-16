export const isDefined = value => value !== null && value !== undefined;

/**
 *
 * @param {object} queryParams - Object `( type: {[paramName: string]: value: any} )` contents a parameter set for http request.
 * @param {object} substitution - Object `( type: {[paramName: string]: substitutionName: string} )` that allow to replace a human understendable query parameter name with its real allias from api.
 * @returns {string} a string with url query parameters
 */
export const createQuery = (queryParams = {}, substitution = {}) => {
  //To iterate all the query parameters
  const query = Object.entries(queryParams).reduce((q, [param, value]) => {
    //If there is a substitution for this parameter replace its name
    param = Object.keys(substitution).includes(param)
      ? substitution[param]
      : param;
    // if value is an object like select value (type: {label: string, value: string | number }) extract nested value! If else leave initial value.
    value = value?.value ?? value;
    // create query pare
    const queryEntry = `${param}=${value}`;
    // check out if this query pare is first in line! q is result query string acumulating all query pairs one by one.
    const queryString = (isDefined(q) ? q + '&' : '?') + queryEntry;
    return isDefined(value) ? queryString : q;
  }, null);
  // if result query string is empty or undefined return empty string.
  return query ?? '';
};

/**
 *
 * @param {*} value - A value, which type is needed to check
 * @param {string[]} types - An array of javascrpipt types
 * @returns {boolean | null} True if value is one of the passed types and false otherwise.
 */
export const hasType = (value, types) => {
  const valueType = value === null ? 'null' : typeof value;
  return !Array.isArray(types) ? null : types.includes(valueType);
};

/**
 *
 * @param {string | number | null | undefined} value - Input value from the MileageSelect fields.
 * @param {string | null | undefined} prefix - Defines range type, for instance: "From" or "To".
 * @param {string | undefined} locale - The international locale according to ISO standard.
 * @returns { {rawValue: string | number | null, formattedValue: string} } The pare of raw and formatted values for the MileageSelect component in the following format: "[prefix] 1 5000".
 */
export const formatValue = (value, prefix, locale = 'en-US') => {
  if (!value) return { rawValue: null, formattedValue: prefix };
  if (!hasType(value, ['string', 'number'])) return value;

  let rawValue;
  switch (typeof value) {
    case 'number':
      rawValue = value;
      break;
    case 'string':
      // eslint-disable-next-line no-case-declarations
      const extractedDigits = value.match(/\d/g);
      //if value has no digits return initial value.
      if (!extractedDigits) {
        return { rawValue: null, formattedValue: prefix };
      }
      rawValue = parseInt(extractedDigits.join(''));
      break;
  }

  const localeNumber = Intl.NumberFormat(locale).format(rawValue);
  const formattedValue = `${prefix} ${localeNumber}`;

  return { rawValue, formattedValue };
};

export const formatInput = (prefix, locale) => value =>
  formatValue(value, prefix, locale).formattedValue;

export const unformatInput = value => formatValue(value).rawValue;

/**
 *
 * @param {string | number} value - A raw value for the react-select components
 * @returns {object: OptionType} An Option object of the react-select component
 */
export const createOption = value => ({ value, label: String(value) });

/**
 * Reviel the adress parts from address string *
 * @param {string} addressStr
 * @returns {object}
 */
export const parseAddress = addressStr => {
  const [street, city, country] = addressStr.split(', ');
  return { street, city, country };
};

/**
 *
 * @param {number | string} mileage - A value than needs to be formatted
 * @returns {string} Mileage in km for the car descripton.
 */
export const mileageFormat = mileage =>
  new Intl.NumberFormat('uk-UA').format(mileage) + ' km';

export const capitalize = str =>
  (str = str.trim()) && str[0].toUpperCase() + str.substring(1).toLowerCase();
// img url consist some car ID that needs to be extracted
export const extractOrderId = img => img.match(/\d+(?=-ai.jpg)/)[0];
