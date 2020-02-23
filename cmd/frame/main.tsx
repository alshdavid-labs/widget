import './styles.scss'
import { h, render } from 'preact'
import { ServicesProvider } from '~/platform/context'
import { integration } from '~/platform/integration'
import { Render } from './render'
import { setDebugValues } from '../../debug'

void async function main() {
  const copyService = new integration.CopyService()
  const sessionService = new integration.SessionService()
  const themeService = new integration.ThemeService()

  const App = () => (
    <ServicesProvider 
      children={<Render />}
      services={{
        copyService,
        sessionService,
        themeService,
      }} />
  )

  render(<App/>, document.querySelector('#outlet'))

  setDebugValues({ sessionService, themeService, copyService })
}()

