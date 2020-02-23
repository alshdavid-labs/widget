import './header.scss'
import { h } from "preact"
import { useService$ } from "~/platform/context"

export type HeaderProps = {
  text: string
} & h.JSX.HTMLAttributes<HTMLDivElement>

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