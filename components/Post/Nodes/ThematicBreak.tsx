import { ThematicBreak } from 'mdast'

import { NodeProps } from '.'


const Node = ({ node }: NodeProps<ThematicBreak>) => {
  return <p>Hello world</p>;
}


export default Node;