import { gql } from "@apollo/client"

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
      day
      open
      editable
      timeslot
    }
  }
`

export {
  GET_ALL_UDDS,
  GET_UDD_ADMINS,
  GET_UDD_SCHEDULE
}

