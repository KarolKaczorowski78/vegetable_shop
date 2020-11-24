export const isValidPhoneNumber = (num: string): boolean => {
  return num.replace(/\s/g, '').length === 9 && !isNaN(parseInt(num));
}