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
    value = value?.value ?? value;
    const queryEntry = `${param}=${value}`;
    const queryString = (isDefined(q) ? q + '&' : '?') + queryEntry;
    return isDefined(value) ? queryString : q;
  }, null);
  return query ?? '';
};

export const hasType = (value, types) => {
  const valueType =
    value === null ? 'null' : isNaN(value) ? 'number' : typeof value;
  return !Array.isArray(types) ? null : types.includes(valueType);
};

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

export const createOption = value => ({ value, label: String(value) });

export const parseAddress = addressStr => {
  const [street, city, country] = addressStr.split(', ');
  return { street, city, country };
};

export const mileageFormat = mileage =>
  new Intl.NumberFormat('uk-UA').format(mileage) + ' km';

export const capitalize = str =>
  (str = str.trim()) && str[0].toUpperCase() + str.substring(1).toLowerCase();

export const extractOrderId = img => img.match(/\d+(?=-ai.jpg)/)[0];
