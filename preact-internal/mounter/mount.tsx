import { h, render } from 'preact'
import { layout } from "~/platform/layout";
import { integration } from "~/platform/integration";
import { ServicesContext } from '~/preact-internal/context'

export type Services = {
  sessionService: integration.LayoutService,
  themeService: integration.ThemeService,
  copyService: integration.CopyService,
}

export class PreactMounter implements layout.Mounter {
  private outlet: HTMLElement | undefined

  constructor(
    private LayoutComponent: () => h.JSX.Element
  ) {}

  mount(outlet: HTMLElement, services: Services) {
    this.outlet = outlet
    
    const App = () => (
      <ServicesContext.Provider 
        value={services} 
        children={<this.LayoutComponent />}/>
    )

    render(<App />, outlet)
  }

  unmount() {
    if (!this.outlet) {
      return
    }
    render(null, this.outlet)
  }

}