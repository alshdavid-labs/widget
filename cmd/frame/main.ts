import './styles.scss'
import { layout } from '~/platform/layout'
import { integration } from '~/platform/integration'
import { reactive } from '~/kit/reactive'
const outlet = document.querySelector('#outlet') as HTMLDivElement

void async function main() {
  const copyService = new integration.CopyService()
  const layoutService = new integration.LayoutService()
  const themeService = new integration.ThemeService()

  ;(window as any).copyService = copyService
  ;(window as any).layoutService = layoutService
  ;(window as any).themeService = themeService

  await reactive.firstEvent(layoutService)

  if (layoutService.loadingStrategy === integration.LayoutLoadingStrategy.Local) {
      const layoutModule: layout.MounterModule = await import('../layouts/' + layoutService.code)
        .catch(() => console.error('Unable to load layout'))

      layoutModule
        .default()
        .mount(outlet, {
          copyService,
          layoutService,
          themeService,
        })
  }
}()
