const getInitialValues = ({ isEdit, market, data }) => {
  let initialValues = {
    localMarket: market,
    id: '',
    blobId: '',
    name: '',
    briefing: '',
    reportingYear: '',
    actualData: '',
    forecastData: '',
    dueDate: '',
    assignTo: [],
    filename: '',
    file: [],
  };
  if (isEdit) {
    const assignTo = data.owners.map((key) => key.value);
    initialValues = {
      id: data.originalId,
      localMarket: data.localMarket || {},
      blobId: '',
      name: data.name,
      briefing: data.briefing,
      reportingYear: data.reportingYear,
      actualData: data.actualData,
      forecastData: data.forecastData,
      dueDate: data.dueDate,
      assignTo,
      filename: '',
      file: [],
    };
  }

  return initialValues;
};

export { getInitialValues };
