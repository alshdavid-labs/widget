import { EmitOnChange } from "~/kit/reactive";

export enum LayoutLoadingStrategy  {
  Local = 'local',
  URL = 'url',
}

export class LayoutService {
  @EmitOnChange()
  public code: string | undefined
  
  public loadingStrategy: LayoutLoadingStrategy = LayoutLoadingStrategy.Local
}