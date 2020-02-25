import './styles.scss'
import { layout } from '~/platform/layout'
import { integration } from '~/platform/integration'
import { reactive } from '~/kit/reactive'

const outlet = document.querySelector('#outlet') as HTMLDivElement

void async function main() {
  const copyService = new integration.CopyService()
  const layoutService = new integration.LayoutService()
  const themeService = new integration.ThemeService()
  let layoutModule: layout.MounterModule | undefined
  let layoutMounter: layout.Mounter | undefined

  ;(window as any).copyService = copyService
  ;(window as any).layoutService = layoutService
  ;(window as any).themeService = themeService

  const onConfigReceived = async () => {
    let layoutLocation = ''

    if (layoutService.loadingStrategy === integration.LayoutLoadingStrategy.Local) {
      layoutLocation = '../layouts/'
    }

    if (layoutService.loadingStrategy === integration.LayoutLoadingStrategy.URL) {
      // Use an actual URL obviously
      layoutLocation = 'https://applets.rokt.com/'
    }

    try {
      layoutModule = await import(layoutLocation + layoutService.code)
    } catch (error) {
      console.error('Unable to load layout')
      return
    }

    if (layoutMounter) {
      layoutMounter.unmount()
    }
    
    layoutMounter = layoutModule.default()

    layoutMounter.mount(outlet, {
      copyService,
      layoutService,
      themeService,
    })
  }

  // On some event which we can use 
  // to determine a render should occur
  reactive
    .getSubscribable(layoutService)
    .subscribe(onConfigReceived)
}()
