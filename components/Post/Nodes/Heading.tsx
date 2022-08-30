import type { Heading as Node } from 'mdast'

import type { NodeProps } from '.'


interface Headings {
  [key: number]: React.FC
}


const headings: Headings = {
  1: ({ childeren }) => <h1>{childeren}</h1>,
  2: () => <h2></h2>,
  3: () => <h3></h3>,
  4: () => <h4></h4>,
  5: () => <h5></h5>,
  6: () => <h6></h6>,
}


type Props = {
  depth: keyof typeof headings;
}

function H({ depth }: Props) {
  return headings[depth]()
}


export default function Heading({ node }: NodeProps<Node>) {
  return <h1>Hello world</h1>
}
