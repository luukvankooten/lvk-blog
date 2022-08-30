import React from 'react';
import type { Node } from 'unist';

import Heading from './Heading';
import Paragraph from './Paragraph';
import Text from './Text'

export interface NodeProps<T extends Node> {
  node: T,
  childeren?: JSX.Element
}

export type NodeElement = React.FC<NodeProps<any>>

type NodeDictionary = Record<string, NodeElement>

const mapNode: NodeDictionary = {
  paragraph: Paragraph,
  heading: Heading,
  // thematicBreak: ThematicBreak,
  // blockquote: Blockquote,
  // list: List,
  // listItem: ListItem,z
  // code: Code,
  // definition: Defintion,
  text: Text,
  // emphasis: Emphasis,
  // strong: Strong,
  // inlineCode: InlineCode,
  // break: Break,
  // link: Link,
  // image: Image,
  // linkReference: LinkReference,
  // imageReference: ImageReference,
};

type Props = {
  nodes: Array<Node>;
}

export default function Nodes({ nodes }: Props) {
  return (
    <React.Fragment>
      {nodes.filter(node => mapNode.hasOwnProperty(node.type)).map((node, index) => {
        const Element = mapNode[node.type as keyof typeof mapNode] as NodeElement

        return <Element node={node} key={index} />;
      })}
    </React.Fragment>
  );
}