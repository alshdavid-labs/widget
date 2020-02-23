// TODO: "implements Storage"

export class MockLocalStorage {
    public getItemSpy = jest.fn();

    constructor(
        public storage: Record<string, string> = {},
    ) {}

    public getLastGetItem() {
        return this.getItemSpy.mock.calls[this.getItemSpy.mock.calls.length - 1][0];
    }

    public getItem(key: string) {
        this.getItemSpy(key);
        const item = this.storage[key];
        if (!item) {
            return null;
        }
        return item;
    }

    public setItem(key: string, value: string) {
      this.storage[key] = value;
    }
}
