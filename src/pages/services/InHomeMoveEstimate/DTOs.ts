export interface MoveEstimateFormValues {
  visitDate: string;
  visitTime: string;
  moveDate: string;
  moveSize: string;
  hearAbout: string;

  firstName: string;
  lastName: string;
  email: string;
  homePhone: string;
  cellPhone: string;
  workPhone: string;
  faxPhone: string;

  fromAddress: string;
  apt: string;
  city: string;
  state: string;
  zipCode: string;

  notes: string;
}

export type MoveEstimateErrors =
  Partial<Record<keyof MoveEstimateFormValues, string>>;
