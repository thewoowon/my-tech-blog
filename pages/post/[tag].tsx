import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Thumbnail from '../../components/Thumbnail';
import { IPost } from '../../types/post';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllPosts } from '../../utils/mdxUtils';
import { useRouter } from 'next/router';

type Props = {
  posts: [IPost];
};

const Tech: NextPage<Props> = ({ posts }: Props) => {
  const router = useRouter();
  const { tag } = router.query;
  const [postsByTag, setPostsByTag] = useState<IPost[]>([]);
  useEffect(() => {
    if (tag === 'all') setPostsByTag(posts);
    else {
      setPostsByTag([]);
      for (let index = 0; index < posts.length; index++) {
        const element = posts[index].stacks;
        if (element.find((value) => value === tag)) {
          setPostsByTag((prev) => [...prev, posts[index]]);
          //postsByTag.push(posts[index]);
        }
      }
    }
  }, []);

  return (
    <Layout
      customMeta={{
        title: '우원 기술 블로그 | TECH',
      }}
    >
      <div className="m-auto flex" style={{ width: '1024px' }}>
        <div className="space-y-12 m-auto mt-12 mb-12 w-8/12">
          {postsByTag.map((post, i) => (
            <div key={post.slug}>
              <div className="flex pb-6">
                <div className="w-9/12 pr-4">
                  <div className="flex justify-start items-center mb-2">
                    {post.stacks.map((value, iter) => {
                      return (
                        <button
                          className="tag-button"
                          key={iter}
                          onClick={() => router.push(`/post/${value}`)}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex">
                    <h2
                      className="text-4xl font-bold m-0 text-gray-800"
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      <Link href={`/posts/${post.slug}`}>
                        <a className="transition duration-200 ease-in-out  dark:text-white hover:text-gray-500">
                          {post.title}
                        </a>
                      </Link>
                    </h2>
                  </div>
                  <div className="flex" style={{ fontFamily: 'Noto Sans KR' }}>
                    <p>{post.description}</p>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="text-sm mr-2"
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      {post.date}
                    </div>
                    <div
                      className="text-sm"
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      - {post.writer}
                    </div>
                  </div>
                </div>
                <div className="w-3/12 pt-6">
                  <Thumbnail
                    slug={post.slug}
                    title={post.title}
                    src={post.thumbnail}
                  />
                </div>
              </div>
              {i < posts.length - 1 ? (
                <div className="mt-5">
                  <hr style={{ width: '100%' }}></hr>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tech;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'stacks',
    'thumbnail',
    'writer',
    'name',
  ]);
  // return the posts props
  return { props: { posts } };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(['stacks']);

  const paths = posts.map((post) => {
    const test = post.stacks;
    for (let index = 0; index < test.length; index++) {
      const element = test[index];
      return { params: { tag: element } };
    }
  });
  paths.push({ params: { tag: 'all' } });

  return {
    paths: paths,
    fallback: false,
  };
};
