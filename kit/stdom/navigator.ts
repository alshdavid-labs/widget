import { getWindow } from './get-window';

export function getUserAgent(): string {
  return getWindow().navigator.userAgent;
}
