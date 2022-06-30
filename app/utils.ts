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
