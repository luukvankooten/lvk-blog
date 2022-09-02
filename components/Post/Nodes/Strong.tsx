import type { Strong as Node } from 'mdast';
import React from 'react';

import { NodeProps } from '.';

export default function Strong({ node, children }: NodeProps<Node>) {
  return React.createElement('strong', null, children);
}