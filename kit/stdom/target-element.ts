export function escapeElementSelector(elementSelector: string): string {
   return elementSelector ? elementSelector.replace(/([\#\.])([0-9])/ig, '$1\\3$2 ') : elementSelector;
}
