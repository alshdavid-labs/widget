import { EmitOnChange } from "~/kit/reactive";

export class SessionService {
  @EmitOnChange() 
  public layoutCode: string | undefined
}