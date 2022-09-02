import { Paragraph as Node } from 'mdast';

import { NodeProps } from '.';

export default function Paragraph({ node, children }: NodeProps<Node>) {
  return <p>{children}</p>
}