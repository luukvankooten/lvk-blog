import type { Image as Node } from 'mdast';
import { default as NextImage } from 'next/image';

import { NodeProps } from '.';

export default function Image({ node }: NodeProps<Node>) {
  return <NextImage src={node.url} alt={node.alt} width={200} height={200} />
}