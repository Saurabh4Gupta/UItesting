const getInitialValues = ({ isEdit, market, data }) => {
  let initialValues = {
    localMarket: market,
    blobId: '',
    name: '',
    briefing: '',
    reportingYear: '',
    actualData: '',
    forecastData: '',
    dueDate: '',
    assignTo: [],
    file: [],
  };
  if (isEdit) {
    initialValues = {
      localMarket: data.localMarket.value,
      blobId: '',
      name: data.name,
      briefing: data.briefing,
      reportingYear: data.reportingYear,
      actualData: data.actualData,
      forecastData: data.forecastData,
      dueDate: data.dueDate,
      assignTo: data.owners,
      file: [],
    };
  }
  return initialValues;
};

export { getInitialValues };
