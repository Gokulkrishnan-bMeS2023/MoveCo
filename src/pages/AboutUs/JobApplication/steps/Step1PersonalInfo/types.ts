export interface PersonalInfoForm {
  PositionSought: string;
  Howdidyoulearnabouttheposition: string;

  firstName: string;
  lastName: string;
  email: string;
  HomePhone: string;
  CellPhone: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: string;
  SocialSecurityNumber: string;
  Onwhatdatewouldyoubeavailableforwork: string;
  citizen: string;
  felony: string;
  terminated: string;
  drugTest: string;
}

export interface PersonalInfoErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  HomePhone?: string;
  CellPhone?: string;
  State?: string;
  SocialSecurityNumber?: string;
  citizen?: string;
  felony?: string;
  terminated?: string;
  drugTest?: string;
}

export interface Step1PersonalInfoProps {
  formData: PersonalInfoForm;
  errors: PersonalInfoErrors;
  handleChange: (field: keyof PersonalInfoForm, value: string) => void;
}