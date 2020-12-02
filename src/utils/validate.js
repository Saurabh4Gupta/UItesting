/* eslint-disable consistent-return */
function validationRule(field, value) {
  const date = new Date();
  switch (field) {
    case 'localMarket':
      return !value
        ? 'This field cannot be blank'
        : '';
    case 'briefing':
      return !value
        ? 'This field cannot be blank'
        : value.length > 4000
          ? 'Name must be less than 4000 characters'
          : '';
    case 'name':
      return !value
        ? 'This field cannot be blank'
        : value.length > 255
          ? 'Name must be less than 255 characters'
          : '';
    case 'dueDate':
      return !value
        ? 'This field cannot be blank'
        : '';
    case 'assignTo':
      return !value
        ? 'This field cannot be blank'
        : '';
    case 'reportingYear':
      return (value === '')
        ? 'This field cannot be blank'
        : '';
    case 'actualData':
      return (value === '')
        ? 'This field cannot be blank'
        : '';
    case 'forecastData':
      return (value === '')
        ? 'This field cannot be blank'
        : '';
    case 'fileUpload':
      return !value
        ? 'Upload tracker template'
        : ''
    default:
      break;
  }
}
export default validationRule;
