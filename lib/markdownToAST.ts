import { remark } from 'remark';

export default function markdownToAST(markdown: string) {
  return remark().parse(markdown).children;
}