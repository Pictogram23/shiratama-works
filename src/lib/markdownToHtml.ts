import { remark } from 'remark'
import html from 'remark-html'

export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html, { sanitize: false }).process(markdown)
  return result.toString()
}

export default markdownToHtml
