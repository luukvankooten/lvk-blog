import { Paragraph as Node } from 'mdast';

import Nodes, { NodeProps } from '.'

export default function Paragraph({ node }: NodeProps<Node>) {
  return <p><Nodes nodes={node.children} /></p>;
}