import './attribution.scss'
import { h, Fragment } from 'preact'


export type AttributionProps = h.JSX.HTMLAttributes<HTMLDivElement> & {

}

export const Attribution = ({ 
  className, 
  style, 
  children,
  ...props 
}: AttributionProps) => {
  return <div 
    className={'rokt-component-attribution ' + className} 
    {...props}
    style={{
      ...(style as any),
    }}>
      { 
        children ? children : <Fragment>
          Powered by <a>Rokt</a> - <a>Privacy Policy</a>
        </Fragment> 
      }
    </div>
}