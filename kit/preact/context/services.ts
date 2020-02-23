import { integration } from '~/platform/integration'

export type Services = {
  sessionService: integration.LayoutService,
  themeService: integration.ThemeService,
  copyService: integration.CopyService,
}
