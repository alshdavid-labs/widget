import { StorageGetterSetter } from '../local-storage-service';

export class MockLocalStorageService implements StorageGetterSetter {
    public getItemSpy = jest.fn();

    constructor(
        public storage: Record<string, string> = {},
    ) {}

    public getLastGetItem() {
        return this.getItemSpy.mock.calls[this.getItemSpy.mock.calls.length - 1][0];
    }

    public getItem(key: string): undefined | string {
        this.getItemSpy(key);
        return this.storage[key];
    }

    public setItem(key: string, value: string) {
      this.storage[key] = value;
    }
}
