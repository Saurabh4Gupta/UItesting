import { gql } from '@apollo/client';

const FILE_UPLOAD = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      message
      status
      data {
        blobId
        filename
        fileSize
      }
    }
  }
`;

export default FILE_UPLOAD;
