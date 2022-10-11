/**
 * 判断 val 是否为数组，并且 length > 0
 * @param val
 */
export default function isValidArray(val: any): boolean {
  return Array.isArray(val) && val.length > 0;
}
