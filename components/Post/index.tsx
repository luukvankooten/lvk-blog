import type { Content } from 'mdast';

type Props = {
  contents: Content[],
}

export default function PostBody({ contents }: Props) {
  return (
    <div>{contents.map(content => {
      return content.toString();
    })}</div>
  );
}


