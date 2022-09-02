import React from 'react';
import type { Node } from 'unist';

import Code from './Code';
import Emphasis from './Emphasis';
import Heading from './Heading';
import Image from './Image';
import Paragraph from './Paragraph';
import Strong from './Strong';
import Text from './Text';
import ThematicBreak from './ThematicBreak';

export interface NodeProps<T extends Node> {
  node: T,
  children: React.ReactElement
}

export type NodeElement = React.FC<NodeProps<any>>

const mapNode = {
  paragraph: Paragraph,
  heading: Heading,
  thematicBreak: ThematicBreak,
  // blockquote: Blockquote,
  // list: List,
  // listItem: ListItem,z
  code: Code,
  // definition: Defintion,
  text: Text,
  emphasis: Emphasis,
  strong: Strong,
  // inlineCode: InlineCode,
  // break: Break,
  // link: Link,
  image: Image,
  // linkReference: LinkReference,
  // imageReference: ImageReference,
};

type Props = {
  nodes: Node[];
}

function NodeChildren({ nodes }: Props): JSX.Element[] {
  return nodes
    .filter(node => mapNode.hasOwnProperty(node.type))
    .map((node, key) => {
      const type = node.type as keyof typeof mapNode
      const Element = mapNode[type] as React.FC<any>;

      return React.createElement(
        Element, 
        { node, key }, 
        NodeChildren({ nodes: (node as any)?.children ?? [] })
      );
    });
}

export default function Nodes({ nodes }: Props) {
  return React.createElement(React.Fragment, null, NodeChildren({ nodes: nodes }));
}