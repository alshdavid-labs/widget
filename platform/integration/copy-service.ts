import { EmitOnChange } from "~/kit/reactive"

export class CopyService {
  @EmitOnChange() 
  public copy: Record<string, string> = {}

  public getCopy(key: string): string {
    return this.copy[key]
  }
}
