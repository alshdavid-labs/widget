import './button.scss'
import { h } from 'preact'
import { useService$ } from '~/platform/context'
import { separateStyles } from '~/platform/integration/theme-service'

export enum ButtonTheme {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export type ButtonProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
  theme: ButtonTheme
  inverted?: boolean
}

export const Button = ({ 
  className, 
  style, 
  inverted = false,
  theme = ButtonTheme.Default,
  ...props 
}: ButtonProps) => {
  const conf = useService$(s => s.themeService)
  const confStyles = conf.keyEquals('button')
  const themeStyles = conf.keyEquals(theme+'Button')
  const defaults = separateStyles(conf.getDefaults())

  const themeColor = defaults.other[theme]

  let background = themeColor || '#999'
  let color = '#fff'
  if (inverted) {
    background = '#fff'
    color = themeColor || '#999'
  }


  return <div 
    className={'rokt-component-button ' + theme + ' ' + className} 
    {...props}
    style={{
      ...defaults.styles,
      ...confStyles,
      ...themeStyles,
      background,
      color,
      ...(style as any),
    }} />
}