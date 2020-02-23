import { Cookie, CookieGetterSetter } from '../cookie-service';

export class MockCookieService implements CookieGetterSetter {
    public getCookieSpy = jest.fn();
    public setCookieSpy = jest.fn();

    public getLastGetCookie() {
        return this.getCookieSpy.mock.calls[this.getCookieSpy.mock.calls.length - 1][0];
    }

    public getLastSetCookie() {
      return this.setCookieSpy.mock.calls[this.setCookieSpy.mock.calls.length - 1][0];
  }

    public getCookie(name: string): string | undefined {
      return this.getCookieSpy(name);
    }

    public setCookie(c: Cookie): void {
      this.setCookieSpy(c);
    }
}
