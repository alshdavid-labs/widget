import './styles.scss'
import { layout } from '~/platform/layout'
import { integration } from '~/platform/integration'
import { setDebugValues } from '../../debug'
import { reactive } from '~/kit/reactive'
const outlet = document.querySelector('#outlet') as HTMLDivElement

void async function main() {
  const copyService = new integration.CopyService()
  const layoutService = new integration.LayoutService()
  const themeService = new integration.ThemeService()
  setDebugValues({ layoutService, themeService, copyService })

  await reactive.firstEvent(layoutService)

  if (layoutService.loadingStrategy === integration.LayoutLoadingStrategy.Local) {
      const layoutModule: layout.MounterModule = await import('../layouts/' + layoutService.code)
        .catch(() => console.error('Unable to load layout'))

      layoutModule.default.mount(outlet, {
        copyService,
        layoutService,
        themeService,
      })
  }
}()

;(window as any).setConfig()