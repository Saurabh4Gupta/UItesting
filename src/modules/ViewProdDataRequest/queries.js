import { gql } from 'apollo-boost';

const GET_DATA_REQUESTS = gql`
query getDataRequests($id: String){
getDataRequests (id: $id) {
    message
    status
    data {
      originalId
      overview
      name
      briefing
      actualData
      forecastData
      reportingYear
      dueDate
      owners {
        # firstName
        # lastName
        label
      }
      trackerTemplate{
        name
      }
      trackerFiles {
        name
        type
        size
        version
      }
      isComplete
    }
  }
}`;

export { GET_DATA_REQUESTS };
