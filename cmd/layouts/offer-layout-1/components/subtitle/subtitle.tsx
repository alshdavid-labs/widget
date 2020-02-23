import './subtitle.scss'
import { h } from "preact"
import { useService$ } from "~/platform/context"

export type SubtitleProps = h.JSX.HTMLAttributes<HTMLDivElement>

export const Subtitle = ({ style, className = '', ...props }: SubtitleProps) => {
  const conf = useService$(s => s.themeService)
  const headingSubtitleConf = conf.wholeKeyIncludes('Heading.Subtitle')
  const titleConf = conf.wholeKeyIncludes('Theme.Creative.Title')

  return <div
    className={'rokt-subtitle ' + className} 
    {...props}
    style={{
      ...titleConf,
      ...headingSubtitleConf,
    }}>
  </div>
}