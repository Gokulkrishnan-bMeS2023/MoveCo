export interface QuoteFormDTO {
  firstName: string;
  lastName: string;
  date: string;
  phoneNumber: string;
  email: string;
  estimate: string;
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormDTO, string>>;