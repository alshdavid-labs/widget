import { EmitOnChange } from "~/kit/reactive"

export class ThemeService {
  @EmitOnChange()
  public configurables: Record<string, string> = {}

  public getDefaults() {
    return this.keyEquals('defaults')
  }

  public wholeKeyIncludes(find: string) {
    return this.find(key => key
      .toLowerCase()
      .includes(find.toLowerCase())
    )
  }

  public keyEquals(find: string) {
    return this.find(key => key
      .toLowerCase()
      .split('.')
      .includes(find.toLowerCase())
    )
  }

  public keyIncludes(find: string) {
    return this.find(key => key
      .toLowerCase()
      .split('.')
      .includes(find.toLowerCase())
    )
  }

  private find(predicate: (key: string) => boolean): Record<string, string> {
    const styles = {}
    for (const key of Object.keys(this.configurables)) {
      if (predicate(key)) {
        const parts = key.split('.')
        const style = parts[parts.length - 1]
        styles[lowerCaseFirstCharacter(style)] = this.configurables[key]
      }
    }
    return styles
  }
}

const lowerCaseFirstCharacter = (s: string) => 
  s.charAt(0).toLowerCase() + s.slice(1)

export const separateStyles = (items: Record<string, string>) => {
  const styles: Record<string, string> = {}
  const other: Record<string, string> = {}
  for (const item of Object.keys(items)) {
    if (item === 'fontColor'){
      styles['color'] = items[item]
      continue
    }
    if (item in document.body.style) {
      styles[item] = items[item]
    } else {
      other[item] = items[item]
    }
  }
  return {
    styles,
    other,
  }
}