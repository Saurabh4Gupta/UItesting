import { gql } from 'apollo-boost';

export const EDIT_DATA_REQUEST_STATUS = gql`
  mutation editDataRequestStatus($data: editDataRequestStatusInput) {
    editDataRequestStatus(data: $data) {
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
        createdAt
        updatedAt
      }
    }
  }
`;
