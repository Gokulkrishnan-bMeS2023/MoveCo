export const createQueryString = (params: Record<string, string>) => {
  const searchParams = new URLSearchParams(params);
  return searchParams.toString();
};