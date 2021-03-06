const data = {
  totalCount: 2,
  data: [
    {
      id: 1,
      client: 'Microsoft',
      localMarket: 'UK',
      status: 'Active',
      name: 'Q2 Data resquest',
      description: 'Need Data for the Q2 2020',
      startDate: '2020-08-14',
      endDate: '2020-10-12',
      dueDate: '2020-08-25',
      updatedAt: '2020-08-15',
      createdAt: '2020-08-14',
      assignTo: 'UK Team',
      isActive: true,
      isDeleted: false,
    },
    {
      id: 2,
      client: 'GM',
      localMarket: 'USA',
      status: 'Complete',
      name: 'Q2 Data resquest',
      description: 'Need Data for the Q2 2020',
      startDate: '2020-08-14',
      endDate: '2020-10-12',
      dueDate: '2020-08-25',
      updatedAt: '2020-08-15',
      isActive: true,
      isDeleted: false,
      createdAt: '2020-08-14',
      assignTo: 'UK Team',
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

export { data, assignToOptions, monthOptions, options };
