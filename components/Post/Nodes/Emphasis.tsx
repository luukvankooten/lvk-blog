import type { Emphasis as Node } from 'mdast';
import React from 'react';

import { NodeProps } from '.';

export default function Emphasis({ node, children }: NodeProps<Node>) {
  return React.createElement('i', null, children);
}