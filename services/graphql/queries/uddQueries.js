import { gql, useQuery } from "@apollo/client"

const GET_ALL_UDDS = gql`
  query getAllUdd {
    getAllPmi {
      id
      branchName
      branchSize
    }
  }
`

export { GET_ALL_UDDS }