import { gql } from "@apollo/client"

const LOGIN = gql`
  query login($email: String!, $password: String) {
    login(email:$email, password:$password) {
      id
      branch {
        id
        branchName
      }
      role
      status
    }
  }
`

const GET_ALL_UDDS = gql`
  query getAllUdd {
    getAllPmi {
      id
      branchName
      branchSize
      branchAddress
    }
  }
`

const GET_UDD_ADMINS = gql`
  query getPMIAdmins($uddId: String!) {
    getAdminPmiByBranch(branchId: $uddId) {
      id
      fullname
      email
      status
      password
      role
    }
  }
`

const GET_UDD_SCHEDULE = gql`
  query getAllSchedule  {
    getAllJadwal {
      branchId
      id
      dayInt
      day
      open
      editable
      timeslot
    }
  }
`

export {
  LOGIN,
  GET_ALL_UDDS,
  GET_UDD_ADMINS,
  GET_UDD_SCHEDULE
}

