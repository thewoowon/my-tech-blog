import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMdxComponentsContext } from '../../context/mdxContext';
import Thumbnail from '../../components/Thumbnail';
import { IPost } from '../../types/post';
import { getPost, getAllPosts } from '../../utils/mdxUtils';
import Prerequisites from '../../components/Prerequisites';
import { ParsedUrlQuery } from 'querystring';
import Stacks from '../../components/Stacks';
import Layout from '../../components/Layout';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { format, parseISO } from 'date-fns';

// props type
type Props = {
    source: MDXRemoteSerializeResult,
    frontMatter: Omit<IPost, 'slug'>;
}

// components to render
const components = {
    Prerequisites,
    Stacks,
}

const PostPage = ({ source, frontMatter }: Props):JSX.Element => {

    // get setters
    const { setPrerequisites, setStacks } = useMdxComponentsContext();

    useEffect(() => {
        // set prerequisites
        setPrerequisites(frontMatter.prerequisites);
        // set stacks
        setStacks(frontMatter.stacks);
    }, [
        setPrerequisites,
        setStacks,
        frontMatter.prerequisites,
        frontMatter.stacks
    ]);

    return (
        <Layout>
            <article className="max-w-5xl px-8 py-4 mx-auto">
                <h1 className="mb-3 text-gray-900 dark:text-white">
                    {frontMatter.title}
                </h1>
                <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
                    {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
                </p>
                <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
                    {frontMatter.description}
                </p>
                <div className="prose prose-green">
                    <MDXRemote components={components} {...source} />
                </div>            
            </article>
        </Layout>
    )
}

export default PostPage;

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params as Iparams;
    // get the slug
    const { content, data } = getPost(slug);
    // serialize the data on the server side
    const mdxSource = await serialize(content, { 
        mdxOptions:{
            remarkPlugins:[require('remark-code-titles')],
            rehypePlugins:[rehypeSlug, rehypeAutolinkHeadings]
        },
        scope: data 
    });
    // console.log("content 시작");
    // console.log(content);
    // console.log("content 끝");
    // console.log("data 시작");
    // console.log(data);
    // console.log("data 끝");
    // console.log("mdxSource 시작");
    // console.log(mdxSource);
    // console.log("mdxSource 끝");
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    //only get the slug from posts 
    const posts = getAllPosts(['slug']);

    // map through to return post paths
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: false
    }
}