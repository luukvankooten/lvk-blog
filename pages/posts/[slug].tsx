import PostType from '@lvk-blog/interface/post';
import { getAllPosts, getPostBySlug } from '@lvk-blog/lib/api';
import markdownToHtml from '@lvk-blog/lib/markdownToHtml';

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  // const router = useRouter();
  return <div dangerouslySetInnerHTML={{ __html: post.content }} />;
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'content'
  ]);

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}


