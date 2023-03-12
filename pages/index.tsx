import type { NextPage, GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Thumbnail from '../components/Thumbnail';
import { IPost } from '../types/post';
import { getAllPosts } from '../utils/mdxUtils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import DarkVideoWatcher from '../components/DarkVideoWatcher';
import LightVideoWatcher from '../components/LightVideoWatcher';
import { IconLock } from '@tabler/icons';

type Props = {
  posts: [IPost];
};

type Tags = { [key: string]: number };

const Home: NextPage<Props> = ({ posts }: Props) => {
  const [tags, setTags] = useState<Tags>({});
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
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
      {theme === 'dark' || resolvedTheme === 'dark' ? (
        <div>
          {/* <VideoWatcher url='/videos/3d_infinite.mp4'></VideoWatcher> */}
          <DarkVideoWatcher></DarkVideoWatcher>
        </div>
      ) : (
        <div>
          {/* <VideoWatcher url='/videos/3d_art.mp4'></VideoWatcher> */}
          <LightVideoWatcher></LightVideoWatcher>
        </div>
      )}
      <div></div>
      <div className="m-auto flex max-w-5xl lg:flex-row xss:flex-col">
        <div className="space-y-12 mt-12 mb-12 lg:w-8/12 xss:w-full xss:px-5">
          {posts.map((post, i) => {
            return (
              <div key={i}>
                <div className={`flex pb-6`}>
                  <div className="w-9/12 pr-4">
                    <div className="flex justify-start items-center mb-2">
                      {post.lock === 'true'
                        ? post.stacks.map((value, iter) => {
                            return (
                              <button
                                className="tag-button cursor-not-allowed"
                                key={iter}
                              >
                                {value}
                              </button>
                            );
                          })
                        : post.stacks.map((value, iter) => {
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
                      <h2 className="text-4xl m-0 text-black">
                        {post.lock === 'true' ? (
                          <span className="cursor-not-allowed font-sans-kr-bold transition duration-200 ease-in-out dark:text-white hover:text-gray-500">
                            {post.title}
                          </span>
                        ) : (
                          <Link href={`/posts/${post.slug}`}>
                            <a className="font-sans-kr-bold transition duration-200 ease-in-out dark:text-white hover:text-gray-500">
                              {post.title}
                            </a>
                          </Link>
                        )}
                      </h2>
                    </div>
                    <div className="flex">
                      <p className="py-5">{post.description}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm mr-2">{post.date}</div>
                      <div className="text-sm">
                        {post.writer} / {post.prerequisites[1]}
                      </div>
                    </div>
                  </div>
                  <div className="w-3/12 pt-5">
                    {post.lock === 'true' ? (
                      <div className="flex justify-center items-center">
                        <div className="lock-icon">
                          <IconLock size={100}></IconLock>
                        </div>
                      </div>
                    ) : (
                      <Thumbnail
                        slug={post.slug}
                        title={post.title}
                        src={post.thumbnail}
                      />
                    )}
                  </div>
                </div>
                {i < posts.length - 1 ? (
                  <div className="mt-5">
                    <hr style={{ width: '100%' }}></hr>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div
          className="mt-12 mb-12 lg:block xss:hidden latest-wrap"
          style={{ height: 'auto' }}
        >
          {/* 최근 글 10가지 */}
          <div className="_sticky pl-2">
            <p style={{ textAlign: 'start' }}>최근 글</p>
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
            {/* 태그 모음 */}

            <p style={{ textAlign: 'start', marginTop: '50px' }}>
              태그({posts.length})
            </p>
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
    'lock',
  ]);
  // retunr the posts props
  return { props: { posts } };
};
