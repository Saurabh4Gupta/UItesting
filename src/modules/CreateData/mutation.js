import { gql } from '@apollo/client';

const CREATE_DATA_REQUEST = gql`
  mutation CreateDataRequest($data: createDataRequestInput!) {
    createDataRequests(data: $data) {
      message
      status
      data {
        id
      }
    }
  }
`;

export default CREATE_DATA_REQUEST;
