import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
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
//import mdxPrism from 'mdx-prism';
import { format, parseISO } from 'date-fns';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';


// props type
type Props = {
    source: MDXRemoteSerializeResult,
    frontMatter: IPost;
}

// components to render
const components = {
    Prerequisites,
    Stacks,
}

const PostPage = ({ source, frontMatter }: Props):JSX.Element => {
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
    }, [
        setPrerequisites,
        setStacks,
        frontMatter.prerequisites,
        frontMatter.stacks
    ]);

    return (
        <React.Fragment>
            <Layout>
                <div style={{"borderBottom":"2px solid rgba(180,180,180,1)"}}>
                    <div className="max-w-5xl px-8 py-4 mx-auto">
                        <div className="flex justify-start items-center mb-2">
                            <button className="tag-button">RN</button>
                            <button className="tag-button">React</button>
                            <button className="tag-button">IOS</button>
                        </div>
                        <h1 className="mb-3 text-gray-600 dark:text-white">
                            {frontMatter.title}
                        </h1>
                        <p className="mb-10 text-sm text-gray-800 dark:text-gray-400">
                            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')} - {frontMatter.writer}
                        </p>
                    </div>
                </div>
                <article className="max-w-4xl px-8 py-4 mx-auto">
                    <div className="prose prose-green">
                        <MDXRemote components={components} {...source} />
                    </div>            
                </article>
            </Layout>
        </React.Fragment>
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