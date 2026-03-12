import { api } from "../lib/axios";

export interface JobApplicationPayload {
  positionSought: string;
  learnPosition: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  homePhone: string;
  cellPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  socialSecurityNumber: string;
  availableforWork: string;
  isUSCitizen: string;
  convictedofaFelony: string;
  involuntarilyTerminated: string;
  willSubmitPreEmploymentDrugScrnTest: string;

  schoolname: string;
  location: string;
  years: string;
  degreeReceived: string;
  major: string;

  employer: string;
  jobTitle: string;
  datesEmployedFrom: string;
  datesEmployedTo: string;
  priorPositions: string;
  startingSalary: string;
  endingSalary: string;
  supervisorName: string;
  supervisorPhone: string;
  reasonforLeaving: string;
  dutiesPerformed: string;

  secondEmployer: string;
  secondJobTitle: string;
  secondDatesEmployedFrom: string;
  secondDatesEmployedTo: string;
  secondPriorPositions: string;
  secondStartingSalary: string;
  secondEndingSalary: string;
  secondSupervisorName: string;
  secondSupervisorPhone: string;
  secondReasonforLeaving: string;
  secondDutiesPerformed: string;
}



export const postJobApplication = (data: FormData) => {
  return api.post("/aboutus/job-application", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};