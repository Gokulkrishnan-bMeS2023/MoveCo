export interface InstantEstimateDTO {
  firstName: string;
  lastName: string;
  date: string;
  phone: string;
  email: string;
}

export type InstantEstimateErrors = Partial<Record<keyof InstantEstimateDTO, string>>;

export interface MoveInformationDTO {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  homePhone: string;
  phone: string;
  workPhone: string;
  faxPhone: string;

  // Move Dates & Times
  moveDate: string;
  moveTime: string;
  dropDate: string;
  dropTime: string;

  // Move Details
  moveType: string;
  hearAbout: string;
  notes: string;

  // Move Location (From)
  fromAddress: string;
  fromApt: string;
  fromCity: string;
  fromState: string;
  fromZipCode: string;
  fromStairs: string;
  fromDistance: string;

  // Drop Location (To)
  toAddress: string;
  toApt: string;
  toCity: string;
  toState: string;
  toZipCode: string;
  toStairs: string;
  toDistance: string;
}

export type MoveInformationErrors = Partial<Record<keyof MoveInformationDTO, string>>;

export interface InventoryDTO {
  quantities: Record<string, number>;
}

export interface InventorySection {
  title: string;
  items: string[];
}