import { useState } from 'react';

const useCustomForm = ({
  initialValues,
  onSubmit, validate,
}) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleSelectField = (value, event) => {
    const { name } = event;
    if (name === 'actualData') {
      const forecast = 12 - value.value;
      const data = { value: forecast, label: forecast.toString() }
      setValues(values.forecastData = data)
    }
    if (name === 'forecastData') {
      const actual = 12 - value.value;
      const data = { value: actual, label: actual.toString() }
      setValues(values.actualData = data)
    }
    setValues({ ...values, [name]: value });
  }
  const handleValidation = async (field, value) => {
    const validationError = await validate(field, value);
    setErrors(prevState => ({
      ...prevState,
      [field]: validationError,
    }));
  };
  const handleCancel = () => {
    setErrors({});
    setValues(initialValues);
  }
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    await Object.keys(values).forEach(key => {
      handleValidation(key, values[key])
    })
    await onSubmit();
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
