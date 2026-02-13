export interface TestimonialFormValues {
  firstName: string;
  lastName: string;
  moveDate: string;
  email: string;
  comments: string;
}

export type TestimonialErrors = Partial<TestimonialFormValues>;
