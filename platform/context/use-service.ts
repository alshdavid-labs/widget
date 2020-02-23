import { Emitter } from '~/kit/reactive'
import { useState, useEffect, useContext } from "preact/hooks"
import { Services } from './services'
import { ServicesContext } from './context'

export const useReactive = <T,>(source: Emitter<T>): T => {
  const [ _, setValue ] = useState({})
  
  useEffect(() => {
    const sub = source.subscribe(v => setValue({}))
    return () => sub.unsubscribe()
  }, [ source ])

  return source as any
}

export const useService = <T>(fn: (services: Services) => T): T => {
  return fn(useContext(ServicesContext))
}

export const useService$ = <T>(fn: (services: Services) => T): T => {
  return useReactive(fn(useContext(ServicesContext)) as any)
} 
