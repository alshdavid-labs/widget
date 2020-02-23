import {
  CookieService,
  SameSite,
} from './cookie-service';

describe('CookieService', () => {
  describe('setCookie()', () => {
    it('should set cookie string to document.cookie', () => {
      const window: Window = {
        document: {},
      } as Window;

      const cookieService = new CookieService(window);

      cookieService.setCookie({
        name: 'CookieMonster',
        sameSite: SameSite.Strict,
        path: 'path',
        secure: true,
        expires: new Date(-4528800000),
        value: 'Me want cookie!',
      });

      expect(window.document.cookie).toEqual('CookieMonster=Me want cookie!;expires=Sun, 09 Nov 1969 14:00:00 GMT;path=path;secure;samesite=strict');
    });
  });
});
