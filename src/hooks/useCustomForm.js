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

  const handleSelectField = (value, fieldName) => {
    setValues({ ...values, [fieldName]: value });
  }
  const handleValidation = async (field, value) => {
    const validationError = await validate(field, value);
    setErrors(prevState => ({
      ...prevState,
      [field]: validationError,
    }));
  };

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
  };
};

export default useCustomForm;
