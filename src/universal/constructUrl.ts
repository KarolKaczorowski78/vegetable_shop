export const constructUrl = (baseUrl: string, queryStrings: string[]) => {
  baseUrl += '?';
  return baseUrl + queryStrings.filter(el => el.length > 0).join('&')
}