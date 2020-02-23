export type MounterModule = {
  default: Mounter
}

export interface Mounter {
  mount: (
    outlet: HTMLElement,
    services?: Record<string, any>
  ) => void
}
