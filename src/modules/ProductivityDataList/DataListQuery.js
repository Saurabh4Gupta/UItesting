import { gql } from 'apollo-boost'

const GET_DATA_LIST = gql`
query {
  getDataList{
  message
  status
  data {
    totalCount
    dataList{
      overviewId
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
}`;

export default GET_DATA_LIST
