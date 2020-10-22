import faker from 'faker';

const createMockRowData = () => ({
  avatar: faker.image.avatar(),
});
export const constructData = (data) => {
  const mData = (() => {
    return Array.from(
      {
        length: data.length,
      },
      createMockRowData,
    );
  })();
  return data.map((item, index) => {
    console.log('data', data);
    return {
      ...item,
      avatar: mData[index]['avatar'],
    };
  });
};
