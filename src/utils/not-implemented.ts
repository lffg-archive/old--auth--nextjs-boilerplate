export default function notImplemented(...args: any[]): never {
  throw new Error((args[0] as string) || 'Not implemented.');
}
