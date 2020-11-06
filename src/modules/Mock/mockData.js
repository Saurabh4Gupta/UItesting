const data = {
  totalCount: 2,
  data: [
    {
      id: 1,
      client: 'Microsoft',
      localMarket: 'UK',
      status: 'Active',
      name: 'Productivity Q2 2020',
      description: 'Need Data for the Q2 2020',
      startDate: '2020-08-14',
      endDate: '2020-10-12',
      dueDate: '2020-08-25',
      updatedAt: '2020-08-15',
      createdAt: '2020-08-14',
      assignTo: 'UK Team',
      actualDataMonth:'6',
      forecastDataMonth:'6',
      isActive: true,
      isDeleted: false,
      year:'2020',
      quarter:'Q2',
    },
    {
      id: 2,
      client: 'GM',
      localMarket: 'USA',
      status: 'Complete',
      name: 'Productivity Q2 2020',
      description: 'Need Data for the Q2 2020',
      startDate: '2020-08-14',
      endDate: '2020-10-12',
      dueDate: '2020-08-25',
      updatedAt: '2020-08-15',
      isActive: true,
      isDeleted: false,
      actualDataMonth:'6',
      forecastDataMonth:'6',
      createdAt: '2020-08-14',
      assignTo: 'UK Team',
      year:'2020',
      quarter:'Q2',
    },
  ],
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
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 11,
    label: '11',
  },
  {
    value: 12,
    label: '12',
  },
]
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
    label: 'UK',
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
]

export { data, assignToOptions, monthOptions, options, clientList };
