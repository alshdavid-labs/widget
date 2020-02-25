import './title.scss'
import { h } from "preact"
import { useService$ } from "~/preact-internal/context"

export type TitleProps = h.JSX.HTMLAttributes<HTMLDivElement>

export const Title = ({ style, className = '', ...props }: TitleProps) => {
  const conf = useService$(s => s.themeService)
  const titleConf = conf.wholeKeyIncludes('Theme.Creative.Title')

  return <div
    className={'rokt-title ' + className} 
    {...props}
    style={{
      ...titleConf,
    }}>
  </div>
}