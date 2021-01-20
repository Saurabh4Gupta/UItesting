import moment from 'moment';

const dateTimeFormat = (date) => {
  const formatDate = moment(date).format('D/MM/YY');
  const formatTime = moment(date).format('H:mm');
  return `${formatDate} at ${formatTime}`;
};

const parsedDataList = (res, marketOptions, name) => {
  if (!res.length) {
    return res;
  }
  const parsedRes = res.map((key) => {
    const marketData = marketOptions.find(
      (value) => key.overviewId === value.overviewId,
    );
    return Object.assign({}, key, { localMarket: marketData, client: name });
  });
  return parsedRes;
};

export { dateTimeFormat, parsedDataList };
