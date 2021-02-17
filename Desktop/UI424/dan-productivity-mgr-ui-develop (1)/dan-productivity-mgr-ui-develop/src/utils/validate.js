/* eslint-disable consistent-return */
function validationRule(field, value) {
  // const date = new Date();
  switch (field) {
    case 'localMarket':
      return value.value === 'All' ? 'This field cannot be blank' : '';
    case 'file':
      return value.length === 0 ? 'Upload tracker template' : '';
    case 'briefing':
      return !value.trim()
        ? 'This field cannot be blank'
        : value.length > 4000
        ? 'Name must be less than 4000 characters'
        : '';
    case 'name':
      return !value.trim()
        ? 'This field cannot be blank'
        : value.length > 255
        ? 'Name must be less than 255 characters'
        : '';
    case 'dueDate':
      return !value ? 'This field cannot be blank' : '';
    case 'assignTo':
      return value.length === 0 ? 'This field cannot be blank' : '';
    case 'reportingYear':
      return value === '' ? 'This field cannot be blank' : '';
    case 'actualData':
      return value === '' ? 'This field cannot be blank' : '';
    case 'forecastData':
      return value === '' ? 'This field cannot be blank' : '';
    default:
      break;
  }
}

const checkValidation = (values, errors) => {
  const isAnyValidationError =    errors
    && !!(
      errors.localMarket
      || errors.name
      || errors.briefing
      || errors.dueDate
      || errors.assignTo
      || errors.forecastData
      || errors.forecastData
      || errors.reportingYear
      || errors.file
    );
  const isAllValuesFilled =    values.localMarket
    && values.name
    && values.assignTo.length
    && values.dueDate
    && (values.forecastData !== '')
    && (values.actualData !== '')
    && values.briefing
    && values.reportingYear
    && values.file.length;

  return { isAllValuesFilled, isAnyValidationError };
};
export { validationRule, checkValidation };
