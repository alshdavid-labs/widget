import './header.scss'
import { h } from "preact"
import { useService$ } from "~/preact-internal/context"

export type HTMLDivProps = h.JSX.HTMLAttributes<HTMLDivElement>

export type HeaderProps = HTMLDivProps & {
  text: string
} 

export const Header = ({ text, style, className = '', ...props }: HeaderProps) => {
  const conf = useService$(s => s.themeService)
  const headerConf = conf.keyEquals('header')

  return <div
    className={'rokt-header ' + className} 
    {...props}
    style={{
      ...headerConf
    }}>
    {text}
  </div>
}