import { gql } from 'apollo-boost';

const GET_USERS = gql`
query getUsers{
  getUsers {

    data {
      value
      label
    }

  }
}`;

export { GET_USERS };
