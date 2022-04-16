const processVal: any = (val: any) => (
  typeof val !== 'object'
  ? val
  : Array.isArray(val)
    ? val.map(renameKeys)
    : renameKeys(val)
);
export const renameKeys = (obj: any) => Object.fromEntries(
  Object.entries(obj)
    .map(([key, val]) => [
      key.replace(/_(.)/g, g =>  g[1].toUpperCase()),
      val
    ])
);