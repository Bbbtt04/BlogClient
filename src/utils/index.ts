import UAParser from 'ua-parser-js'

export function formatDate(data: string, format: string) {
  return useDateFormat(data, format).value
}

export const parseBrowser = (ua: any) => {
  const parser = new UAParser(ua)
  const result = parser.getBrowser()
  if (result.name)
    return `${result.name} ${result.version}`

  return ''
}
export const parseOS = (ua: any) => {
  const parser = new UAParser(ua)
  const result = parser.getOS()
  if (result.name)
    return `${result.name} ${result.version}`

  return ''
}
