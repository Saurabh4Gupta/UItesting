const data = {
  data: [
    {
      id: 1,
      client: 'Microsoft',
      localMarket: { value: 'UK', label: 'United Kingdom' },
      status: 'Overdue',
      name: 'Productivity Q2 2020',
      briefing: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
      the printing industry.Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industrys standard
      dummy text ever since the 1500s and it still is.`,
      dueDate: '13/07/2020',
      updatedAt: '29/10/20 at 14:32',
      createdAt: '2020-08-14',
      assignTo: 'Ryan Killick',
      reportingYear: 'April 2020 - March 2021',
      actualData: { value: 4, label: '4 months' },
      forecastData: { value: 8, label: '8 months' },
      isActive: true,
      isDeleted: false,
      year: '2020',
      quarter: 'Q2',
    },
    {
      id: 2,
      client: 'GM',
      localMarket: { value: 'USA', label: 'USA' },
      status: '',
      name: 'Productivity Q3 2020',
      briefing: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.`,
      dueDate: '13/07/2020',
      updatedAt: '30/10/20 at 14:32',
      isActive: true,
      isDeleted: false,
      actualData: { value: 10, label: '10 months' },
      forecastData: { value: 2, label: '2 months' },
      createdAt: '2020-08-14',
      assignTo: 'Ryan Killick',
      reportingYear: 'April 2020 - March 2021',
      year: '2020',
      quarter: 'Q3',
    },
    {
      id: 3,
      client: 'Microsoft',
      localMarket: { value: 'UK', label: 'United Kingdom' },
      status: 'Overdue',
      name: 'Productivity Q2 2020',
      briefing: 'Need Data for the Q2 2020',
      dueDate: '2020-08-25',
      updatedAt: '29/10/20 at 14:32',
      createdAt: '2020-08-14',
      assignTo: 'UK Team',
      actualData: { value: 4, label: '4 months' },
      forecastData: { value: 8, label: '8 months' },
      isActive: true,
      isDeleted: false,
      year: '2020',
      quarter: 'Q2',
    },
  ],
};

const completedData = {
  data: [],
};
export const getCompletedData = () => ({
  completedCount: completedData.data.length,
  completedData: completedData.data,
});
export const getData = () => ({
  totalCount: data.data.length,
  data: data.data,
});

export function updateData(values) {
  values.createdAt = new Date();
  values.isActive = true;
  values.year = '2020';
  values.quarter = 'Q3';
  values.isDeleted = false;
  values.id = data.data.length + 1;
  values.client = 'Microsoft';
  console.log('values', values);
  data.data.push(values);
}

const options = [
  {
    value: 'ARG',
    label: 'Argentina',
  },
  {
    value: 'AUS',
    label: 'Australia',
  },
  {
    value: 'BEL',
    label: 'Belgium',
  },
  {
    value: 'UK',
    label: 'United Kingdom',
  },
];

const monthOptions = [
  {
    value: 0,
    label: '0 months',
  },
  {
    value: 1,
    label: '1 months',
  },
  {
    value: 2,
    label: '2 months',
  },
  {
    value: 3,
    label: '3 months',
  },
  {
    value: 4,
    label: '4 months',
  },
  {
    value: 5,
    label: '5 months',
  },
  {
    value: 6,
    label: '6 months',
  },
  {
    value: 7,
    label: '7 months',
  },
  {
    value: 8,
    label: '8 months',
  },
  {
    value: 9,
    label: '9 months',
  },
  {
    value: 10,
    label: '10 months',
  },
  {
    value: 11,
    label: '11 months',
  },
  {
    value: 12,
    label: '12 months',
  },
];
const assignToOptions = [
  {
    value: 'ARG',
    label: 'Argentina',
  },
  {
    value: 'AUS',
    label: 'Australia',
  },
  {
    value: 'BEL',
    label: 'Belgium',
  },
  {
    value: 'UK',
    label: 'United Kingdom',
  },
];

const clientList = [
  { title: 'American Express', avatar: '', clientCode: 'AE' },
  { title: 'Burberry', avatar: '', clientCode: 'BB' },
  { title: 'Burger King', avatar: '', clientCode: 'BK' },
  { title: 'General Motors', avatar: '', clientCode: 'GM' },
  { title: "Kellogg's Company", avatar: '', clientCode: 'KC' },
  { title: 'The Kraft Heinz Company', avatar: '', clientCode: 'KHC' },
  { title: 'Microsoft Corporation', avatar: 'abc.ico', clientCode: 'MC' },
  { title: 'Procter & Gamble', avatar: '', clientCode: 'PG' },
];

const year = [{}];

const currency = [
  { value: 'gbp', label: 'GBP(Default)' },
  { value: 'usd', label: 'USD' },
  { value: 'euro', label: 'EUR' },
]
const reportingYear = [
  {
    value: 'April 2021 - March 2022',
    label: 'April 2021 - March 2022',
  },
  {
    value: '2020-2021',
    label: 'April 2020 - March 2021',
  },
  {
    value: '2019-2020',
    label: 'April 2019 - March 2020',
  },
]
export { assignToOptions, monthOptions, options, clientList, year, currency, reportingYear, data };
