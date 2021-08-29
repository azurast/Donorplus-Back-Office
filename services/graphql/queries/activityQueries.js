import { gql } from "@apollo/client"

const GET_ACTIVITY_STAGES_COUNT = gql`
    query getActivityStagesCount($branchId: String!){
        getActivityForInterview(branchId: $branchId) {
            id
        },
        getActivityForBloodTest(branchId: $branchId) {
            id
        },
        getActivityForDonor(branchId: $branchId) {
            id
        }
    }
`

const GET_INTERVIEW_ACTIVITIES = gql`
    query getInterviewActivities($branchId: String!){
        getActivityForInterview(branchId: $branchId) {
            id
            didInterview
            didInterviewAt
            passInterview
            passInterviewAt
            pendonor {
                fullName
                fcm_token
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
    query getBloodTestActivities($branchId: String!){
        getActivityForBloodTest(branchId: $branchId) {
            id
            didBloodTest
            didBloodTestAt
            passBloodTest
            passBloodTestAt
            pendonor {
                fullName
                fcm_token
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
    query getDonorPlasmaActivities($branchId: String!){
        getActivityForDonor(branchId: $branchId) {
            id
            didScheduleTest
            didScheduleTestAt
            didDonor
            didDonorAt
            pendonor {
                fullName
                fcm_token
                pendonorDetails {
                    sex
                    dateOfBirth
                    bloodType
                }
            }
        }
    }
`

export {
  GET_ACTIVITY_STAGES_COUNT,
  GET_INTERVIEW_ACTIVITIES,
  GET_BLOODTEST_ACTIVITIES,
  GET_PLASMADONOR_ACTIVITIES
}