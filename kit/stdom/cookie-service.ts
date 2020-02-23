export interface Cookie extends CookieDetails {
  name: string;
}

export enum SameSite {
  Lax = 'lax',
  None = 'none',
  Strict = 'strict',
}

export type CookieDetails = {
  value: string,
  expires?: Date;
  path?: string,
  secure?: boolean;
  sameSite?: SameSite;
};

export interface CookieGetter {
  getCookie(name: string): string | undefined;
}

export interface CookieSetter {
  setCookie(c: Cookie): void;
}

export type CookieGetterSetter = (
  CookieGetter &
  CookieSetter
  );

export class CookieService {
  constructor(
    private window: Window,
  ) {
  }

  public getCookie(name: string): string | undefined {
    try {
      const match = this.window.document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) {
        return match[2];
      }
    } catch (e) {
      // [ToGr] https://stackoverflow.com/questions/389456/cookie-blocked-not-saved-in-iframe-in-internet-explorer
    }
    return undefined;
  }

  public setCookie(c: Cookie): void {
    try {
      this.window.document.cookie = this.serialize(c);
    } catch (error) {
      // Ignore
    }
  }

  private serialize(cookie: Cookie): string {
    const {
      name,
      path = '/',
      sameSite,
      secure,
      value,
    } = cookie;

    let {expires} = cookie;

    if (!expires) {
      const date = new Date();
      date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
      expires = date;
    }

    let str = `${name}=${value};expires=${expires.toUTCString()};path=${path}`;

    if (secure) {
      str += ';secure';
    }

    if (sameSite) {
      str += `;samesite=${sameSite}`;
    }

    return str;
  }
}
