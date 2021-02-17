import { gql } from 'apollo-boost';

const GET_USERS = gql`
  query getUsers {
    getUsers {
      data {
        value
        label
        email
      }
    }
  }
`;

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
        }
        isComplete
      }
    }
  }
`;

export { GET_USERS, GET_DATA_REQUESTS };
