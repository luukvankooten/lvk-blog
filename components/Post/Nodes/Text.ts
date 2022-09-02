import type { Text as Node } from 'mdast';

import { NodeProps } from '.';

export default function Text({ node, children }: NodeProps<Node>) {
  return (node.value.toString() as unknown) as JSX.Element
}