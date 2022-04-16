export function isPromise(p: any): Boolean {
  return p && Object.prototype.toString.call(p) === '[object Promise]';
}