export function create_classes(...args: any) {
  return [...args].join(" ");
}
export function showStyleTernary(
  state: string | number | boolean,
  isTrue: string,
  isFalse: string
) {
  return state ? isTrue : isFalse;
}
