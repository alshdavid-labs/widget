import { h, Fragment } from "preact"
import { useService$ } from "~/platform/context"
import { useState, useEffect } from "preact/hooks"

const EmptyLayout = () => <Fragment />

export const Render = ({}) => {
  const sessionService = useService$(s => s.sessionService)
  const [ Layout, setLayout ] = useState(EmptyLayout)
  
  useEffect(() => {
    if (sessionService.layoutCode) {
      import('../layouts/' + sessionService.layoutCode)
        .then(layout => setLayout(layout.default))
        .catch(_error => console.error('Unable to find layout'))
    }
  }, [sessionService.layoutCode])

  return Layout
}