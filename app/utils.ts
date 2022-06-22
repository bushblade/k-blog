export function getWebPsrc(src: string, width = 800) {
  const id = src.split('/').reverse()[0]
  return `https://media.graphassets.com/resize=fit:crop,width:${width}/output=format:webp/${id}`
}
