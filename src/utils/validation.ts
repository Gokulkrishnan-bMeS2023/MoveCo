export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => emailRegex.test(email);

export const isRequired = (value: string): boolean => value.trim().length > 0;