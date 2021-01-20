import { gql } from 'apollo-boost'

const GET_LIST_CLIENT = gql`
query {
  getClientsList{
  message
  status
  data {
    code
    markets {
      overviewId
      code
      name
    }
    name
  }
}
}`;


export default GET_LIST_CLIENT
