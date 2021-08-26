import { gql } from "@apollo/client"

const CREATE_UDD = gql`
  mutation createUdd(
    $branchName: String!,
    $branchSize: String!,
    $branchAddress: String!,
    $branchPhoneNumber: String!,
#    $branchStatus: String!,
    $branchAvailability: String!,
    $langitude: String!,
    $longitude: String!,
    ) {
      addPmi(
        branchName: $branchName,
        branchSize: $branchSize,
        branchAddress: $branchAddress,
        phoneNumber: $branchPhoneNumber,
        availability: $branchAvailability,
        langitude: $langitude,
        longitude: $longitude
      ) {
        branchName,
        branchSize,
        branchAddress
        phoneNumber,
        availability
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
const UPDATE_UDD = gql`
  mutation updateUdd(
    $branchId: String!,
    $branchName: String!,
    $branchSize: String!,
    $branchAddress: String!,
    $langitude: String!,
    $longitude: String!,
  ) {
    updatePmi(
      id: $branchId,
      branchName: $branchName,
      branchSize: $branchSize,
      branchAddress: $branchAddress,
      langitude: $langitude,
      longitude: $longitude
    ) {
      id
    }
  }
`
const UPDATE_ADMIN = gql`
  mutation updateAdminPmi(
    $adminId: String!,
    $branchId: String!,
    $fullName: String!,
    $email: String!,
    $password: String!,
    $role: String!,
    $status: Boolean!
  ) {
    updateAdminPmi(
      id: $adminId,
      branchId: $branchId,
      fullname: $fullName,
      email: $email,
      password: $password,
      role: $role,
      status: $status
    ) {
      id
    }
  }
`
const UPDATE_SCHEDULE = gql`
  mutation updateJadwals(
    $scheduleId: String!,
    $open: Boolean!,
    $timeslot: JSON!
  ) {
    updateJadwals(
      id: $scheduleId,
      open: $open,
      timeslot: $timeslot
    ) {
      id
    }
  }
`

export {
  CREATE_UDD,
  CREATE_ADMIN,
  UPDATE_UDD,
  UPDATE_ADMIN,
  UPDATE_SCHEDULE
};
