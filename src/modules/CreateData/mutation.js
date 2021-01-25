import { gql } from '@apollo/client';

export const CREATE_DATA_REQUEST = gql`
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

export const DELETE_DATA_REQUEST = gql`
  mutation DeleteDataRequest($id: String!) {
    deleteDataRequests(id: $id) {
      message
      status
      data {
        originalId
      }
    }
  }
`;
