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

const getClientInfo = async (auth) => {
  const  userInfo = await auth.getClientPerms();
  const filterApplicationId = userInfo.filter(item => {
    if (item.startsWith('PRM')) {
      return item;
    }
    return null;
  });
  const getUserPermission = filterApplicationId.map((item) => {
  const userPermissionData = item.split(':');
    const newUserData =  userPermissionData.pop().split(',').join('');
    const newCrudUser = [...userPermissionData, newUserData]
     const resource = userPermissionData[3];
    const crudValues = newCrudUser[4]
     return { resource, crudValues }
 });

return getUserPermission
}
export { dateTimeFormat, parsedDataList, getClientInfo };
