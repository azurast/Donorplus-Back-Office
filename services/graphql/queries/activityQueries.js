import { gql } from "@apollo/client"

const GET_INTERVIEW_ACTIVITIES = gql`
    query getInterviewActivities{
        getActivityForInterview {
            id
            didInterview
            didInterviewAt
            passInterview
            passInterviewAt
            pendonor {
                fullName
                pendonorDetails {
                    sex
                    dateOfBirth
                    bloodType
                }
            }
        }
    }
`

const GET_BLOODTEST_ACTIVITIES = gql`
    query getBloodTestActivities{
        getActivityForBloodTest {
            id
            didBloodTest
            didBloodTestAt
            passBloodTest
            passBloodTestAt
            pendonor {
                fullName
                pendonorDetails {
                    sex
                    dateOfBirth
                    bloodType
                }
            }
        }
    }
`

const GET_PLASMADONOR_ACTIVITIES = gql`
    query getDonorPlasmaActivities{
        getActivityForDonor {
            id
            pendonor {
                fullName
            }
        }
    }
`

export {
  GET_INTERVIEW_ACTIVITIES,
  GET_BLOODTEST_ACTIVITIES,
  GET_PLASMADONOR_ACTIVITIES
}