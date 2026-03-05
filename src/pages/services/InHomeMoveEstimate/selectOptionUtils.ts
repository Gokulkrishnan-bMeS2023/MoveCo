export type SelectOption = {
  label: string;
  value: string;
};

export const toOptions = (data: string[]): SelectOption[] =>
  data.map((item) => ({
    label: item,
    value: item,
  }));

export const toStateOptions = (
  data: Record<string, string>
): SelectOption[] =>
  Object.entries(data).map(([key, value]) => ({
    label: value,
    value: key,
  }));