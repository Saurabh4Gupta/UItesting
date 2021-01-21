import { gql } from 'apollo-boost';

const GET_DATA_LIST = gql`
  query GetDataList($data: DataListInput!) {
    getDataList(data: $data) {
      message
      status
      data {
        totalCount
        dataList {
          overviewId
          originalId
          forecastData
          name
          actualData
          reportingYear
          dueDate
          createdAt
          updatedAt
          quarter
          isOverDue
        }
      }
    }
  }
`;

export default GET_DATA_LIST;
