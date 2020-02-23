import { Emitter, Subscribable } from "./emitter"

export function EmitOnChange() {
  return function(target: any, key: string) {
    if (!target.__emitter) {
      target.__emitter = new Emitter<any>()
      target.subscribe = target.__emitter.subscribe.bind(target.__emitter)
    }
     
    let value = target[key]
    Object.defineProperty(target, key, {
      get: () => value,
      set: (update: any) => {
        value = update
        target.__emitter.emit(target)
      }
    })
  }
}

export const getSubscribable = <T>(
  target: T
): Subscribable<T> => {
  if (!(target as any).subscribe) {
    throw new Error('Cannot Subscribe')
  }
  return (target as any)
}

export const firstEvent = <T>(
  target: T
): Promise<T> => 
  new Promise(res => {
    const sub = getSubscribable(target).subscribe(v => {
      res(v)
      sub.unsubscribe()
    })
  })
