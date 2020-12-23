const data = {
  data: [
    {
      id: 1,
      client: 'Microsoft',
      localMarket: { value: 'UK', label: 'United Kingdom' },
      status: 'Overdue',
      clientMarket: 'Microsoft United Kingdom',
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
      dummy text ever since the 1500s and it still is.
      Lorem Ipsum is simply dummy text of the printing and typesetting
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
      dummy text ever since the 1500s and it still is.
      Lorem Ipsum is simply dummy text of the printing and typesetting
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
      assignTo: [{ value: 'ryanKillick', label: 'Ryan Killick', userImage:'user1.png' }],
      reportingYear: { value: 'April 2020  -  March 2021', label: 'April 2020  -  March 2021' },
      actualData: { value: 4, label: '4 months' },
      forecastData: { value: 8, label: '8 months' },
      isActive: true,
      isDeleted: false,
      year: '2020',
      quarter: 'Q2',
      totalTenure: '2020 Q2',
      isCompleted: false,
    },
    {
      id: 2,
      client: 'Microsoft',
      localMarket: { value: 'USA', label: 'USA' },
      status: '',
      clientMarket: 'Microsoft USA',
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
      actualData: { value: 7, label: '7 months' },
      forecastData: { value: 5, label: '5 months' },
      createdAt: '2020-08-14',
      assignTo: [
        { value: 'howellLee', label: 'Howell Lee', userImage:'user1.png' },
        { value: 'ryanKillick', label: 'Ryan Killick', userImage:'user2.png' },
        { value: 'ryanManton', label: 'Ryan Manton', userImage:'user3.png' },
      ],
      reportingYear:  { value: 'April 2020  -  March 2021', label: 'April 2020  -  March 2021' },
      year: '2020',
      quarter: 'Q3',
      totalTenure: '2020 Q3',
      isCompleted: false,
    },
    {
      id: 3,
      client: 'Microsoft',
      localMarket: { value: 'UK', label: 'United Kingdom' },
      status: 'Overdue',
      clientMarket: 'Microsoft United Kingdom',
      name: 'Productivity Q1 2020',
      briefing: 'Need Data for the Q2 2020',
      dueDate: '23/07/2020',
      updatedAt: '29/10/20 at 14:32',
      createdAt: '2020-08-14',
      assignTo: [{ value: 'ryanKillick', label: 'Ryan Killick', userImage:'user1.png' }],
      reportingYear: { value: 'April 2020  -  March 2021', label: 'April 2020  -  March 2021' },
      actualData: { value: 2, label: '2 months' },
      forecastData: { value: 10, label: '10 months' },
      isActive: true,
      isDeleted: false,
      year: '2020',
      quarter: 'Q1',
      totalTenure: '2020 Q1',
      isCompleted: false,
    },
    {
      id: 4,
      client: 'Microsoft',
      localMarket: { value: 'UK', label: 'United Kingdom' },
      status: 'Overdue',
      clientMarket: 'Microsoft United Kingdom',
      name: 'Productivity Q1 2020',
      briefing: 'Need Data for the Q2 2020',
      dueDate: '23/12/2020',
      updatedAt: '29/10/20 at 14:32',
      createdAt: '2020-08-14',
      assignTo: [{ value: 'ryanKillick', label: 'Ryan Killick', userImage:'user1.png' }],
      reportingYear: { value: 'April 2020  -  March 2021', label: 'April 2020  -  March 2021' },
      actualData: { value: 3, label: '3 months' },
      forecastData: { value: 9, label: '9 months' },
      isActive: true,
      isDeleted: false,
      year: '2020',
      quarter: 'Q1',
      totalTenure: '2020 Q1',
      isCompleted: false,
    },
  ],
};

// export const getCompleteData = () => {
//   const filterData = data.data.filter(key => key.isCompleted);
//   return { totalCount: filterData.length, data: filterData };
// };

export const getCount = (market, status = undefined) => {
  let ongoingData;
  let completeData
  if (status === undefined) {
    ongoingData = data.data.filter(key => !key.isCompleted && !key.isDeleted);
    completeData = data.data.filter(key => key.isCompleted && !key.isDeleted);
  }
  if (status === 'ongoing') {
    ongoingData = data.data.filter(key => !key.isCompleted && !key.isDeleted);
  }
  if (status === 'complete') {
    completeData = data.data.filter(key => key.isCompleted && !key.isDeleted);
  }

  if (market !== '') {
    ongoingData = ongoingData.filter(key => key.localMarket.value === market);
    completeData = completeData.filter(key => key.localMarket.value === market);
    return { ongoingCount: ongoingData.length, completeCount: completeData.length };
  }

  return { ongoingCount: ongoingData.length, completeCount: completeData.length };
}

export const getDataCount = (market, status) => {
  let filterData = data.data;
  if (status === 'ongoing') {
    filterData = filterData.filter(
      (key) => !key.isCompleted,
    );
  }
  if (status === 'complete') {
    filterData = filterData.filter(
      (key) => key.isCompleted,
    );
  }
  if (market !== '') {
    filterData = filterData.filter(
      (key) => key.localMarket.value === market,
    );
  }
  return filterData.length;
}

export const getDataById = (id) => data.data.find(key => key.id.toString() === id && !key.isDeleted)

export const getData = (market, status) => {
  // debugger;
  let filterData = data.data;
  if (status === 'ongoing') {
    filterData = filterData.filter(
      (key) => !key.isCompleted && !key.isDeleted,
    );
  }
  if (status === 'complete') {
    filterData = filterData.filter(
      (key) => key.isCompleted && !key.isDeleted,
    );
  }
  if (market !== '') {
    filterData = filterData.filter(
      (key) => key.localMarket.value === market,
    );
  }
  return { totalCount: filterData.length, data: filterData };
};

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
  { value: 'USA', label: 'USA' },
  { value: 'FR', label: 'France' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'SGP', label: 'Singapore' },
  { value: 'Tk', label: 'Turkey' },
  { value: 'IT', label: 'Italy' },
];

const monthOptions = [
  {
    value: 0,
    label: '0 months',
  },
  {
    value: 1,
    label: '1 month',
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
  { title: 'Microsoft Corporation', avatar: 'abc.ico', clientCode: 'MC' },
  { title: 'Procter & Gamble', avatar: '', clientCode: 'PG' },
  { title: 'The Kraft Heinz Company', avatar: '', clientCode: 'KHC' },
];
const newDate = new Date();
const nexStartDate = newDate.getFullYear() + 1;
const nextEndDate = newDate.getFullYear() + 2;

const currentStartDate = newDate.getFullYear();
const currentEndDate = newDate.getFullYear() + 1;

const prevStartDate = newDate.getFullYear() - 1;
const prevEndDate = newDate.getFullYear();

const market = [
  { value: '', label: 'All markets' },
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
  { value: 'USA', label: 'USA' },
  { value: 'FR', label: 'France' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'SGP', label: 'Singapore' },
  { value: 'Tk', label: 'Turkey' },
  { value: 'IT', label: 'Italy' },
];

const currency = [
  { value: 'gbp', label: 'GBP(Default)' },
  { value: 'usd', label: 'USD' },
  { value: 'euro', label: 'EUR' },
];
const reportingYear = [
  {
    value: `April ${nexStartDate}  -  March ${nextEndDate}`,
    label: `April ${nexStartDate}  -  March ${nextEndDate}`,
  },
  {
    value: `April ${currentStartDate}  -  March ${currentEndDate}`,
    label: `April ${currentStartDate}  -  March ${currentEndDate}`,
  },
  {
    value: `April ${prevStartDate}  -  March ${prevEndDate}`,
    label: `April ${prevStartDate}  -  March ${prevEndDate}`,
  },
];

const versionHistory = {
  data: [
    {
      id: 13,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V12.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 12,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V11.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 11,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V10.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 10,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V9.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 9,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V8.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 8,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V7.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 7,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V6.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 6,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V5.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 5,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V4.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 4,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V3.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 3,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V2.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 2,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'V1.0',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
    {
      id: 1,
      name: 'Microsoft Uk - Productivity Report - ',
      type: 'XLS',
      size: '242KB',
      version: 'Template',
      dataRequest: '',
      blobId: '',
      createdAt: '2020-12-01',
    },
  ],
};

const userList = [
  { value:'ryanKillick',
    label:'Ryan Killick' },
  { value:'ryanManton',
    label:'Ryan Manton' },
  { value:'howellLee',
    label:'Howell Lee' },
  { value:'boladale',
    label:'Boladale' },
  ];

export {
  assignToOptions,
  monthOptions,
  options,
  clientList,
  market,
  currency,
  reportingYear,
  data,
  versionHistory,
  userList,
};
