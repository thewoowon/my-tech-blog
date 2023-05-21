import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMdxComponentsContext } from '../../context/mdxContext';
import { IPost } from '../../types/post';
import { getPost, getAllPosts } from '../../utils/mdxUtils';
import Prerequisites from '../../components/Prerequisites';
import { ParsedUrlQuery } from 'querystring';
import Stacks from '../../components/Stacks';
import Layout from '../../components/Layout';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkPrism from 'remark-prism';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
//import mdxPrism from 'mdx-prism';
import { format, parseISO } from 'date-fns';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-scss.min';
import 'prismjs/components/prism-sql.min';
import 'prismjs/components/prism-diff.min';
import 'prismjs/components/prism-docker.min';
import 'prismjs/components/prism-git.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-yaml.min';
import 'prismjs/components/prism-graphql.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-csharp.min';
import 'prismjs/components/prism-c.min';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import techLogo from '../../images/logo/woowon_bg.png';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Comments, Likes } from '@prisma/client';
import { TAKE } from '../../constants/posts';

import { Pagination } from '@mantine/core';
import toast from 'react-hot-toast';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: IPost;
  ip: string;
};

const components = {
  Prerequisites,
  Stacks,
};

export interface ICreateCommentForm {
  email: string;
  contents: string;
  githubId: string;
}

const COMMENT_QUERY_KEY = `../api/add-comment`;
const LIKE_QUERY_KEY = `../api/add-like`;

const PostPage = ({ source, frontMatter, ip }: Props): JSX.Element => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [division, setDivision] = useState('');
  const [comment, setComment] = useState('');
  const [postId, setPostId] = useState('');
  const [activePage, setPage] = useState(1);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateCommentForm>({
    mode: 'onChange',
  });
  const queryClient = useQueryClient();
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  // get setters
  const { setPrerequisites, setStacks } = useMdxComponentsContext();

  useEffect(() => {
    // set prerequisites
    setPrerequisites(frontMatter.prerequisites);
    // set stacks
    setStacks(frontMatter.stacks);

    setPostId(frontMatter.name);
    frontMatter.prerequisites.map((value, iter) => {
      if (iter == 0) setName(value);
      else if (iter == 1) setPosition(value);
      else if (iter == 2) setDivision(value);
      else if (iter == 3) setComment(value);
    });
  }, [
    setPrerequisites,
    setStacks,
    frontMatter.prerequisites,
    frontMatter.stacks,
  ]);

  const gentleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    //(e.target as Element).innerHTML = '<FontAwesomeIcon icon={faHeart}/>좋아요';
    (e.target as Element)
      .querySelector('.fa-thumbs-up')
      .classList.remove('animate-like');
    (e.target as Element)
      .querySelector('.fa-thumbs-up')
      .classList.add('animate-like');
  };

  const { mutate: addLike, isLoading } = useMutation<
    unknown,
    unknown,
    Omit<Likes, 'id' | 'updatedAt' | 'createdAt' | 'host'>,
    any
  >(
    (item) =>
      fetch(`../api/add-like`, {
        method: 'POST',
        body: JSON.stringify({ item }),
      })
        .then((res) => res.json())
        .then((data) => data.items),
    {
      onMutate: () => {
        queryClient.invalidateQueries([LIKE_QUERY_KEY]);
      },
      onSuccess: (data, variables, context) => {
        toast.success('감사합니다!', {
          icon: '👏',
          position: 'top-right',
        });
        queryClient.invalidateQueries([
          `../api/get-likes?postId=${frontMatter.name}`,
        ]);
      },
    }
  );

  const { mutate: addComment } = useMutation<
    unknown,
    unknown,
    Omit<Comments, 'id' | 'updatedAt' | 'createdAt'>,
    any
  >(
    (item) =>
      fetch(`../api/add-comment`, {
        method: 'POST',
        body: JSON.stringify({ item }),
      })
        .then((res) => res.json())
        .then((data) => data.items),
    {
      onMutate: () => {
        queryClient.invalidateQueries([COMMENT_QUERY_KEY]);
      },
      onSuccess: (data, variables, context) => {
        toast.success('댓글 등록 완료', {
          position: 'top-right',
        });
        //comments.push(data as Comments)
        queryClient.invalidateQueries([
          `../api/get-comments-count?postId=${frontMatter.name}`,
        ]);
        queryClient.invalidateQueries([
          `../api/get-comments?skip=0&take=5&postId=${frontMatter.name}`,
        ]);
      },
    }
  );

  const onSubmit = () => {
    const { email, contents, githubId } = getValues();
    addComment({
      email: email,
      contents: contents,
      github: githubId,
      postId: postId,
    });
  };

  const { data: total } = useQuery(
    [`../api/get-comments-count?postId=${frontMatter.name}`],
    () =>
      fetch(`../api/get-comments-count?postId=${frontMatter.name}`)
        .then((res) => res.json())
        .then((data) => Math.ceil(data.items / TAKE))
  );

  const { data: likesList } = useQuery<{ items: Likes[] }, unknown, Likes[]>(
    [`../api/get-likes?postId=${frontMatter.name}`],
    () =>
      fetch(`../api/get-likes?postId=${frontMatter.name}`).then((res) =>
        res.json()
      ),
    {
      select: (data) => data.items,
    }
  );
  const { data: comments } = useQuery<
    { items: Comments[] },
    unknown,
    Comments[]
  >(
    [
      `../api/get-comments?skip=${
        TAKE * (activePage - 1)
      }&take=${TAKE}&postId=${frontMatter.name}`,
    ],
    () =>
      fetch(
        `../api/get-comments?skip=${
          TAKE * (activePage - 1)
        }&take=${TAKE}&postId=${frontMatter.name}`
      ).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  );

  return (
    <React.Fragment>
      <Layout
        customMeta={{
          title: '우원 기술 블로그 | POST',
        }}
      >
        <div className="border-b-2 border-black">
          <div className="max-w-5xl px-8 py-4 mx-auto relative">
            <div className="flex justify-start items-center mt-1 mb-0">
              {frontMatter.stacks.map((value, iter) => {
                return (
                  <button className="tag-button" key={iter}>
                    {value}
                  </button>
                );
              })}
            </div>
            <h1
              className="mb-0 mt-0 text-black dark:text-white font-bold"
              style={{ fontSize: '45px' }}
            >
              {frontMatter.title}
            </h1>
            <p className="mt-0 text-sm text-gray-800 dark:text-gray-400">
              {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')} -{' '}
              {frontMatter.writer}
            </p>
            <div className="like-content justify-between">
              <div className="flex justify-center items-center">
                <div className="pr-4">
                  <FontAwesomeIcon icon={faThumbsUp} className="pr-2" />
                  {likesList
                    ? likesList.filter((item: Likes) => item.type === 1).length
                    : 0}
                </div>
              </div>
              <span className="mx-auto"></span>
              <button
                className="btn-gentle like-review"
                onClick={(e) => {
                  gentleEffect(e);
                  addLike({
                    postId: postId,
                    type: 1,
                  });
                }}
              >
                {isLoading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-spin "
                    style={{ marginRight: '5px' }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ marginRight: '5px' }}
                  />
                )}
                Good
              </button>
            </div>
          </div>
        </div>
        <article className="max-w-5xl px-8 py-16 mx-auto">
          <div className="prose dark:prose-invert max-w-none mdx-wrapper">
            <MDXRemote components={components} {...source} />
            <div className="user-wrap flex items-center">
              <div className="w-4/12 h-full flex justify-center items-center">
                <Image
                  src={techLogo}
                  alt="logo"
                  width={150}
                  height={180}
                  style={{ borderRadius: '10%', objectFit: 'fill' }}
                ></Image>
              </div>
              <div className="w-8/12 h-full dark:text-black">
                <div className="flex items-center pl-5 pr-12 h-1/2">
                  <div className="pt-5">
                    <h4
                      className="dark:text-black"
                      style={{ marginBottom: '0' }}
                    >
                      {' '}
                      {frontMatter.writer} / {division}
                    </h4>
                    <p className="m-0 text-xs">{position}</p>
                  </div>
                </div>
                <div className="flex items-start pl-5 pr-12 h-1/2">
                  {'안녕하세요👏'}
                  <br />
                  {'우원입니다.'}
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="dark:bg-black flex flex-col justify-center items-center mx-auto w-full border-t-2 border-b-2 border-black py-20">
          <div
            className="w-full"
            style={{ minWidth: '360px', maxWidth: '920px', minHeight: '300px' }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-start items-center w-full"
            >
              <div className="w-full flex gap-2 py-2 flex justify-start items-center">
                <div
                  style={{ border: 'solid 2px black' }}
                  className="px-4 py-2 h-12 flex justify-center items-center"
                >
                  Email
                </div>
                <input
                  style={{ border: 'solid 2px black' }}
                  className="bg-white dark:bg-white dark:text-black w-full h-12 px-4 focus:outline-none"
                  {...register('email', {
                    required: '이메일을 입력해주세요',
                    pattern:
                      /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  })}
                  type="text"
                  required={true}
                  autoComplete="true"
                  placeholder="이메일을 입력해주세요"
                ></input>
                <div
                  style={{ border: 'solid 2px black' }}
                  className="px-4 py-2 bg-white h-12 flex justify-center items-center"
                >
                  Gihub
                </div>
                <input
                  style={{ border: 'solid 2px black' }}
                  className="bg-white dark:bg-white dark:text-black w-full h-12 px-4 focus:outline-none"
                  {...register('githubId', {
                    required: '깃허브 아이디를 입력해주세요',
                    pattern: /^[a-z|A-Z]+$/,
                  })}
                  type="text"
                  required={true}
                  autoComplete="true"
                  placeholder="깃허브 아이디를 입력해주세요"
                ></input>
              </div>
              <textarea
                style={{ border: 'solid 2px black' }}
                {...register('contents', {
                  required: '댓글 내용을 입력해주세요',
                })}
                cols={30}
                required={true}
                className="mb-6 px-4 py-4 bg-white dark:text-black shadow-sm border-2 border-gray-100 w-full h-36 text-md outline-none"
                autoComplete="true"
                placeholder="댓글 내용을 입력해주세요"
              ></textarea>
              <div className="flex justify-end items-center w-full">
                <button
                  type="submit"
                  style={{ border: 'solid 2px black' }}
                  className="px-4 py-2"
                >
                  댓글 등록
                </button>
              </div>
            </form>
          </div>
          <div
            className="w-full"
            style={{ minWidth: '360px', maxWidth: '920px', minHeight: '300px' }}
          >
            {comments &&
              comments.map((comment) => {
                return (
                  <div
                    key={comment.id}
                    className="flex flex-col justify-start items-center w-full"
                  >
                    <div className="w-full flex gap-2 py-2 flex justify-start items-center">
                      <div className="px-4 py-1 bg-gray-300 rounded-md text-white flex justify-center items-center">
                        Email
                      </div>
                      <div className="w-full px-4 focus:outline-none rounded-md">
                        {comment.email}
                      </div>
                      <div className="px-4 py-1 bg-gray-300 rounded-md text-white flex justify-center items-center">
                        Gihub
                      </div>
                      <div className="w-full px-4 focus:outline-none rounded-md">
                        {comment.github}
                      </div>
                    </div>
                    <div className="px-4 py-4 bg-white shadow-sm rounded-lg w-full text-md">
                      {comment.contents}
                    </div>
                    <div className="mb-4 py-2 text-md w-full flex justify-end items-center">
                      생성일 : {comment.createdAt.toString().substring(0, 10)}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="w-full flex mt-20">
            {total && total !== 0 ? (
              <Pagination
                className="m-auto"
                page={activePage}
                onChange={setPage}
                total={total}
                color="dark"
              />
            ) : null}
          </div>
        </div>

        {/* {
          errors.email && <FormError message={"정확한 이메일 부탁해요"}></FormError>
        } */}
      </Layout>
    </React.Fragment>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  // get the slug
  const { content, data } = getPost(slug);

  // serialize the data on the server side
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-code-titles'),
        remarkPrism,
        remarkGfm,
        remarkMath,
        remarkFrontmatter,
      ],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from posts
  const posts = getAllPosts(['slug', 'stacks']);

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
