import { useState } from 'react';
import { monthOptions } from '../modules/Mock/mockData';

const useCustomForm = ({ initialValues, validate }) => {
  const [values, setValues] = useState(initialValues || {});
  const [forecastOptions, setforecastOptions] = useState();
  const [errors, setErrors] = useState({});

  const handleValidation = async (field, value) => {
    const validationError = await validate(field, value);
    setErrors((prevState) => ({
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
      handleValidation('forecastData', forecast);
      handleValidation('actualData', value);
      setValues({ ...values, forecastData: forecast, [name]: value.value });
      const forcastOptionsData = monthOptions.filter(
        (m) => m.value <= forecast,
      );
      setforecastOptions(forcastOptionsData);
      return;
    }

    handleValidation(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleOwners = (value, event) => {
    const { name } = event;
    handleValidation(name, value || []);
    setValues({
      ...values,
      [name]: Array.isArray(value) ? value.map((x) => x.value) : [],
    });
  };
  const handleCancel = () => {
    setErrors({});
    setValues(initialValues);
    setforecastOptions();
  };
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    await Object.keys(values).forEach((key) => {
      handleValidation(key, values[key]);
    });
  };

  return {
    values,
    errors,
    forecastOptions,
    handleChange,
    handleSelectField,
    handleSubmit,
    handleCancel,
    handleOwners,
    setErrors,
    setValues,
  };
};

export default useCustomForm;