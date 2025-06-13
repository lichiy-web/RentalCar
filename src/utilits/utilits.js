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
