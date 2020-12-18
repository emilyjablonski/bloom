import React from "react"
import ApplicationConductor from "./ApplicationConductor"
import { blankApplication } from "@bloom-housing/backend-core/types"

export const retrieveApplicationConfig = () => {
  // Note: this whole function will eventually be replaced with one that reads this from the backend.
  return {
    sections: ["You", "Household", "Income", "Preferences", "Review"],
    languages: ["en", "zh"],
    steps: [
      {
        name: "chooseLanguage",
      },
      {
        name: "whatToExpect",
      },
      {
        name: "primaryApplicantName",
      },
      {
        name: "primaryApplicantAddress",
      },
      {
        name: "alternateContactType",
      },
      {
        name: "alternateContactName",
      },
      {
        name: "alternateContactInfo",
      },
      {
        name: "liveAlone",
      },
      {
        name: "householdMemberInfo",
      },
      {
        name: "addMembers",
      },
      {
        name: "preferredUnitSize",
      },
      {
        name: "adaHouseholdMembers",
      },
      {
        name: "vouchersSubsidies",
      },
      {
        name: "income",
      },
      {
        name: "preferencesIntroduction",
      },
      {
        name: "generalPool",
      },
      {
        name: "demographics",
      },
      {
        name: "summary",
      },
      {
        name: "terms",
      },
    ],
  }
}

export const AppSubmissionContext = React.createContext({
  conductor: {} as ApplicationConductor,
  application: blankApplication(),
  listing: null,
  /* eslint-disable */
  syncApplication: (data) => {},
  syncListing: (data) => {},
})
