import { h, render } from 'preact'
import { layout } from "~/platform/layout";
import { integration } from "~/platform/integration";
import { ServicesContext } from '~/kit/preact/context'

export type Services = {
  sessionService: integration.LayoutService,
  themeService: integration.ThemeService,
  copyService: integration.CopyService,
}

export class PreactMounter implements layout.Mounter {
  constructor(
    private LayoutComponent: () => h.JSX.Element
  ) {}

  mount(outlet: HTMLElement, services: Services) {
    render(
      <ServicesContext.Provider 
        value={services} 
        children={
          <this.LayoutComponent />
        }/>,
      outlet
    )
  }

}