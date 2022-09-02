import type { Link as Node } from 'mdast';
import React from 'react';

import { NodeProps } from '.';

type Type = Parameters<typeof React.createElement>[0];

export interface LinkContextInterface<P extends keyof React.ReactHTML> {
  element: Type,
  props: React.ReactHTML[P],
}

const ctx = React.createContext<LinkContextInterface<'a'>>({
  element: 'a',
  props: {},
});

const Node = ({ node, children }: NodeProps<Node>) => {
  return <a href={node.url}>{children}</a>
}

export default function Link({ node, children }: NodeProps<Node>) {
  const context = React.useContext(ctx);

  return React.createElement(context.element, props, children)
}