import { createContext, h } from 'preact'

export const ServicesContext = createContext<any>({} as any)
export const ServicesProvider = ({ services, children }) => 
  h(ServicesContext.Provider, { value: services, children })
