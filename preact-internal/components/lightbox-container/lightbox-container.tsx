import './lightbox-container.scss'
import { h } from 'preact'

type LightboxContainerProps = h.JSX.HTMLAttributes<HTMLDivElement>

export const LightboxContainer = ({
  className = '',
  children,
  ...props
}: LightboxContainerProps) => {
  return <div 
    {...props}
    className={'rokt-component-lightbox-container ' + className}>
    <div>
      {children}
    </div>
  </div>
}