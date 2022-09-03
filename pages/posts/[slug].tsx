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
import Image from 'next/image';
import techLogo from '../../images/logo/woowon_removebg.png';


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
        frontMatter.stacks,
    ]);

    return (
        <React.Fragment>
            <Layout>
                <div style={{"borderBottom":"2px solid rgba(180,180,180,1)"}}>
                    <div className="max-w-5xl px-8 py-4 mx-auto">
                        <div className="flex justify-start items-center mb-2">
                            {
                                frontMatter.stacks.map((value,iter) =>{
                                    return(
                                        <button className="tag-button" key={iter}>{value}</button>
                                    )
                                })
                            }
                        </div>
                        <h1 className="mb-3 text-gray-600 dark:text-white" style={{fontFamily:"Noto_Sans"}}>
                            {frontMatter.title}
                        </h1>
                        <p className="mb-10 text-sm text-gray-800 dark:text-gray-400" style={{fontFamily:"Noto_Sans"}}>
                            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')} - {frontMatter.writer}
                        </p>
                    </div>
                </div>
                <article className="max-w-4xl px-8 py-4 mx-auto">
                    <div className="prose prose-green">
                        <MDXRemote components={components} {...source} />
                        <div className="user-wrap flex items-center">
                            <div className="w-4/12 h-full flex justify-center items-center">
                                <Image src={techLogo} alt="logo" width={150} height={150} style={{borderRadius:"50%",objectFit:"fill"}}></Image>
                            </div>
                            <div className="w-8/12 h-full"> 
                                <div className="h-3/6 flex items-center pl-5 pr-12" style={{"fontFamily":"Noto_Sans"}}>
                                    <h4>{frontMatter.writer} / 요람코 </h4>
                                </div>
                                <div className="h-3/6 flex items-start pl-5 pr-12" style={{"fontFamily":"Noto_Sans"}}>
                                    안녕하세요. {frontMatter.writer}입니다.
                                </div>
                            </div>
                        </div>
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
            remarkPlugins:[require('remark-code-titles'),remarkPrism,remarkGfm,remarkMath,remarkFrontmatter],
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