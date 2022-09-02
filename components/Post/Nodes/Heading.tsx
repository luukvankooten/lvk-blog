import type { Heading as Node } from 'mdast';
import React from 'react';

import type { NodeProps } from '.';

export default function Heading({ node, children }: NodeProps<Node>) {
  return React.createElement(`h${node.depth}`, null, children)
}
