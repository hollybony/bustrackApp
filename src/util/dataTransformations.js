export const reshapeErrors = errors => {
  var allError = '';
  errors.forEach(error => {
    allError += 'Error in ' + error.field + ' ' + error.defaultMessage + '\n';
  });
  return allError;
};
