import { gql } from 'apollo-boost';

const GET_DATA_REQUESTS = gql`
  query getDataRequests($id: String!) {
    getDataRequests(id: $id) {
      message
      status
      data {
        originalId
        overviewId
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
          value
          picture
        }
        trackerTemplate {
          name
          blobId
        }
        trackerFiles {
          name
          type
          size
          version
          blobId
        }
        isComplete
      }
    }
  }
`;

const DOWNLOAD_FILE = gql`
query downloadFile($id: String!){
  downloadFile(id: $id){
    message
    status
    data
  }
}`;

export { GET_DATA_REQUESTS, DOWNLOAD_FILE };
