export function getWebPsrc(src: string, width = 800) {
  const id = src.split('/').reverse()[0]
  return `https://media.graphassets.com/resize=fit:crop,width:${width}/output=format:webp/${id}`
}

/**
 * Trims a block of plain text to specified length removing line breaks and
 * surplus white space
 *
 * @param text - the text you want to trim to length
 * @param length -  the length of string to return default 13
 * @returns A string of plain text
 */
export function trimText(text: string, length: number = 13) {
  const t = text
    .replace(/[0-9]\\n|\\n|\/\/|\n/gi, ' ')
    .replace(/\s+/g, ' ')
    .split(' ')
    .slice(0, length)
    .join(' ')
    .trim()
  return t
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' })

/**
 * Takes a valid date string and formats it to en-GB
 * eg. "2022-01-08T14:49:15.586393+00:00" becomes "8 January 2022"
 *
 * @param dateStr - must be a valid dateTime string that can be passed to the
 * Date constructor
 * @returns - A UK formatted long date string
 */

export function formatDate(dateStr: string): string {
  return dateFormatter.format(new Date(dateStr))
}

export function lessThanNdaysOld(dateStr: string, n: number = 30): boolean {
  const today = new Date().getTime()
  const dateToCheck = new Date(dateStr).getTime()
  const msBetweenDates = Math.abs(dateToCheck - today)
  const daysBetween = msBetweenDates / (24 * 60 * 60 * 1000)
  return daysBetween < n
}

function gcd(w: number, h: number): number {
  const mod = w % h
  return h === 0 ? w : gcd(h, mod)
}

export function getAspectRatio(
  width: number = 16,
  height: number = 9
): { width: number; height: number } {
  const ratio = gcd(width, height)
  console.log(ratio)
  if (ratio === 1) return { width: 16, height: 9 }
  return { width: width / ratio, height: height / ratio }
}
