import { integration } from '~/platform/integration'

export type Services = {
  sessionService: integration.SessionService,
  themeService: integration.ThemeService,
  copyService: integration.CopyService,
}
