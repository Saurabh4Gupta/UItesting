import { useState } from 'react';

const useCustomForm = ({
  initialValues,
  validate,
}) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  const handleValidation = async (field, value) => {
    const validationError = await validate(field, value);
    setErrors(prevState => ({
      ...prevState,
      [field]: validationError,
    }));
  };
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    handleValidation(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSelectField = (value, event) => {
    const { name } = event;
    if (name === 'actualData') {
      const forecast = 12 - value.value;
      const data = { value: forecast, label: forecast.toString() };
      handleValidation('forecastData', forecast);
      setValues(values.forecastData = data)
    }
    if (name === 'forecastData') {
      const actual = 12 - value.value;
      const data = { value: actual, label: actual.toString() };
      handleValidation('actualData', actual)
      setValues(values.actualData = data)
    }
    handleValidation(name, value)
    setValues({ ...values, [name]: value });
  }

  const handleCancel = () => {
    setErrors({});
    setValues(initialValues);
  }
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    await Object.keys(values).forEach(key => {
      handleValidation(key, values[key])
    })
  };

  return {
    values,
    errors,
    handleChange,
    handleSelectField,
    handleSubmit,
    handleCancel,
  };
};

export default useCustomForm;
