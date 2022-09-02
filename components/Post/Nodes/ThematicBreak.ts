import { ThematicBreak as Node } from 'mdast';
import React from 'react';

import { NodeProps } from '.';


export default function ThematicBreak({ node, children }: NodeProps<Node>) {
  return React.createElement('hr', null);
}