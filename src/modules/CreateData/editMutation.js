import gql from 'graphql-tag';


const EDIT_DATA_REQUEST = gql`
mutation EditDataRequest($data: createDataRequestInput!){
  editDataRequest(data: $data){
    message
    status
    data {
      id
      name
      briefing
      actualData
      forecastData
      reportingYear
      dueDate
      owners
      isComplete
      filename
      blobId
    }
  }
}`;

export default EDIT_DATA_REQUEST;
