import { api } from "../lib/axios";

interface ReferralForm {
  customerEmail: string;
  name: string;
  customerPhoneNo: string;
}

interface ContactForm {
  customerEmail: string;
  name: string;
  telePhone: string;
  referralUrl?: string;
  comments?: string;
}

export const postReferral = (data: ReferralForm) => {
  return api.post("/home/tell-a-friend", data);
};

export const postContact = (data: ContactForm) => {
  return api.post("/home/contact", data);
};
