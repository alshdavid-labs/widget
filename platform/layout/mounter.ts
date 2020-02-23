export type MounterModule = {
  default: MounterFactory
}

export type MounterFactory = () => Mounter

export interface Mounter {
  mount: (
    outlet: HTMLElement,
    services?: Record<string, any>
  ) => void
}
