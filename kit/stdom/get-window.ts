export enum GetWindowError {
  NO_WINDOW = 'NO_WINDOW',
}

export const getWindow = (): Window => {
  if (typeof window === 'undefined') {
    throw new Error(GetWindowError.NO_WINDOW);
  }
  return window;
};
