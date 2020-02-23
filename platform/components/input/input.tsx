import './input.scss'
import { h } from 'preact'
import { useService$ } from '~/platform/context'

export type InputProps = h.JSX.HTMLAttributes<HTMLInputElement>

export const Input = ({ 
  className = '', 
  style, 
  ...props 
}: InputProps) => {
  return <input 
    className={'rokt-component-input ' + className} 
    {...props}
    style={{
      ...(style as any),
    }} />
}