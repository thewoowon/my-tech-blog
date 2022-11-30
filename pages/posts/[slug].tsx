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

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import techLogo from '../../images/logo/woowon_bg.png';

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: IPost;
};

// components to render
const components = {
  Prerequisites,
  Stacks,
};

const PostPage = ({ source, frontMatter }: Props): JSX.Element => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [division, setDivision] = useState('');
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);
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

  const goodEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    //(e.target as Element).innerHTML = '<FontAwesomeIcon icon={faHeart}/>좋아요';
    (e.target as Element)
      .querySelector('.fa-heart')
      .classList.add('animate-like');
  };
  const gentleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    //(e.target as Element).innerHTML = '<FontAwesomeIcon icon={faHeart}/>좋아요';
    (e.target as Element)
      .querySelector('.fa-thumbs-up')
      .classList.add('animate-like');
  };
  const learnEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    //(e.target as Element).innerHTML = '<FontAwesomeIcon icon={faHeart}/>좋아요';
    (e.target as Element)
      .querySelector('.fa-pencil')
      .classList.add('animate-like');
  };

  return (
    <React.Fragment>
      <Layout>
        <div style={{ borderBottom: '1px solid rgba(180,180,180,0.5)' }}>
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
              className="mb-0 mt-0 text-gray-600 dark:text-white"
              style={{ fontFamily: 'Noto Sans KR', fontSize: '45px' }}
            >
              {frontMatter.title}
            </h1>
            <p
              className="mt-0 text-sm text-gray-800 dark:text-gray-400"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')} -{' '}
              {frontMatter.writer}
            </p>
            <div className="like-content">
              <button className="btn-good like-review" onClick={goodEffect}>
                <FontAwesomeIcon icon={faHeart} /> 좋아요
              </button>
              <button className="btn-gentle like-review" onClick={gentleEffect}>
                <FontAwesomeIcon icon={faThumbsUp} /> 멋져요
              </button>
              <button className="btn-learn like-review" onClick={learnEffect}>
                <FontAwesomeIcon icon={faPencil} /> 배웠어요
              </button>
            </div>
          </div>
        </div>
        <article className="max-w-5xl px-8 py-4 mx-auto">
          <div className="prose prose-green">
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
              <div className="w-8/12 h-full">
                <div
                  className="flex items-center pl-5 pr-12"
                  style={{ fontFamily: 'Noto Sans KR', height: '50%' }}
                >
                  <div className="pt-5">
                    <h4 style={{ marginBottom: '0' }}>
                      {' '}
                      {frontMatter.writer} / {division}
                    </h4>
                    <p className="m-0 text-xs">{position}</p>
                  </div>
                </div>
                <div
                  className="flex items-start pl-5 pr-12"
                  style={{ fontFamily: 'Noto Sans KR', height: '50%' }}
                >
                  {'안녕하세요👏'}
                  <br />
                  {'새로운 영감을 주는 일과 꾸준한 성장을 즐기는'}
                  <br />
                  {'주니어 개발자 우원입니다.'}
                </div>
              </div>
            </div>
          </div>
        </article>
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
