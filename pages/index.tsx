import type { NextPage, GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Thumbnail from '../components/Thumbnail';
import { IPost } from '../types/post';
import { getAllPosts } from '../utils/mdxUtils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import VideoWatcher from '../components/VideoWatcher';

type Props = {
  posts: [IPost];
};

type Tags = { [key: string]: number };

const Home: NextPage<Props> = ({ posts }: Props) => {
  const [tags, setTags] = useState<Tags>({});
  const router = useRouter();
  useEffect(() => {
    const tags = posts.reduce((acc, post) => {
      post.stacks.forEach((tag) => {
        if (acc[tag]) {
          acc[tag] += 1;
        } else {
          acc[tag] = 1;
        }
      });
      return acc;
    }, {} as Tags);
    setTags(tags);
  }, []);
  return (
    <Layout>
      <div>
        <VideoWatcher></VideoWatcher>
      </div>
      <div></div>
      <div className="m-auto flex" style={{ width: '1024px' }}>
        <div className="space-y-12 mt-12 mb-12 w-8/12">
          {posts.map((post, i) => (
            <div key={i}>
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
                      className="text-4xl m-0 text-black"
                      style={{ fontFamily: 'Noto Sans KR Medium' }}
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
                      {post.writer} / {post.prerequisites[1]}
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
        <div
          className="mt-12 mb-12 w-4/12 latest-wrap"
          style={{ height: 'auto' }}
        >
          {/* ?????? ??? 10?????? */}
          <div className="_sticky pl-2">
            <p style={{ textAlign: 'start' }}>?????? ???</p>
            <ul className="latest-list">
              {posts.map((post, i) => {
                if (i < 5)
                  return (
                    <li key={i}>
                      <Link href={`posts/${post.name}`}>
                        <a>{post.title}</a>
                      </Link>
                    </li>
                  );
              })}
            </ul>
            {/* ?????? ?????? */}

            <p style={{ textAlign: 'start', marginTop: '50px' }}>??????</p>
            <div style={{ paddingLeft: '5px' }}>
              {Object.keys(tags).map((tag) => {
                return (
                  <div key={tag}>
                    <Link href={'/post/' + tag}>
                      <a className="tags-list">
                        - {tag + '(' + tags[tag] + ')'}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'prerequisites',
    'stacks',
    'thumbnail',
    'writer',
    'name',
  ]);
  // retunr the posts props
  return { props: { posts } };
};
