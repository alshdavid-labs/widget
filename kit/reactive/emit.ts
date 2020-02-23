import { Emitter } from "./emitter"

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