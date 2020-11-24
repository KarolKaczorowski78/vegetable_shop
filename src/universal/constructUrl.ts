export const constructUrl = (baseUrl: string, queryStrings: string[]) => {
  baseUrl += '?';
  return baseUrl + queryStrings.slice(1).join('&')
}