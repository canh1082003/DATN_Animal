export function parseContentIntoSections(content: any) {
  const regex = /### (.+)/g
  const sections: { [key: string]: string } = {}
  const matches = [...content.matchAll(regex)]
  for (let i = 0; i < matches.length; i++) {
    const title = matches[i][1].trim()
    const startIndex = matches[i].index + matches[i][0].length
    const endIndex = i + 1 < matches.length ? matches[i + 1].index : content.length
    const sectionContent = content.substring(startIndex, endIndex).trim()
    sections[title] = sectionContent
  }
  return sections
}
export function parseSections(markdown: any) {
  const sectionRegex = /### (.*?)\n([\s\S]*?)(?=###|$)/g
  const result = {}
  let match

  while ((match = sectionRegex.exec(markdown)) !== null) {
    const [, title, content] = match
    result[title.trim()] = content.trim()
  }

  return result
}
