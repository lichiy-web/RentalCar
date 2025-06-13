export const isDefined = value => value !== null && value !== undefined;

export const createQuery = (queryParams = {}, substitution = {}) => {
  const query = Object.entries(queryParams).reduce((q, [param, value]) => {
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

export const formatValue = (value, prefix, locale = 'en-US') => {
  const extractedDigits = value.match(/\d/g);
  if (!extractedDigits) {
    return { rawValue: null, formattedValue: '' };
  }

  const rawValue = parseInt(extractedDigits.join(''));
  const localeNumber = Intl.NumberFormat(locale).format(rawValue);
  const formattedValue = `${prefix} ${localeNumber}`;

  return { rawValue, formattedValue };
};

export const formatInput = (prefix, locale) => value =>
  formatValue(value, prefix, locale).formattedValue;

export const unformatInput = value => formatValue(value).rawValue;

export const createOption = value => ({ value, label: String(value) });
