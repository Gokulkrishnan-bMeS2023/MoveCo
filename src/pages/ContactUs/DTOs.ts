export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ReferralFormValues {
  yourName: string;
  friendEmail: string;
  friendPhone: string;
}

export type FormErrors<T> = Partial<Record<keyof T, string>>;
