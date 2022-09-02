import type { Code as Node } from 'mdast';

import { NodeProps } from '.';

export default function Code({ node, children }: NodeProps<Node>) {
  return <code>{children}</code>;
}