import { gql } from "@apollo/client"

const CREATE_UDD = gql`
  mutation createUdd(
    $branchName: String!,
    $branchSize: String!,
    $branchAddress: String!,
    $langitude: String!,
    $longitude: String!,
    ) {
      addPmi(
        branchName: $branchName,
        branchSize: $branchSize,
        branchAddress: $branchAddress,
        langitude: $langitude,
        longitude: $longitude
      ) {
        branchName,
        branchSize,
        branchAddress
      }
    }
`
const CREATE_ADMIN = gql`
  mutation createAdmin(
    $branchId: String!,
    $fullName: String!,
    $email: String!,
    $password: String!,
    $role: String!,
    $status: Boolean!
   ) {
    addAdminPmi(
      branchId: $branchId,
      fullname: $fullName,
      email: $email,
      password: $password,
      role: $role,
      status: $status
    ) {
      fullname
      email
      status
    }
  }
`

export {
  CREATE_UDD,
  CREATE_ADMIN
};
