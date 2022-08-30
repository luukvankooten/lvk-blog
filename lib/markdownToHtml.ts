import { remark } from 'remark'

export default async function markdownToHtml(markdown: string) {
  const result = remark().parse(markdown)

  console.log(result);

  return 'h1'
}