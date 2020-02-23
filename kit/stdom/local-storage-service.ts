export interface StorageGetter {
  getItem(key: string): undefined | string;
}

export interface StorageSetter {
  setItem(key: string, value: string): void;
}

export type StorageGetterSetter = (
  StorageSetter &
  StorageGetter
);

export class LocalStorageService {
  constructor(
    private window: Window,
  ) {}

  public getItem(key: string): undefined | string {
    try {
      const value = this.window.localStorage.getItem(key);
      if (value === null) {
        return undefined;
      }
      return value;
    } catch (error) {
      return undefined;
    }
  }

  public setItem(key: string, value: string): void {
    try {
      this.window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore this
    }
  }
}
