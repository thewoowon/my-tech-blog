import React from 'react';
import Layout from '../components/Layout';
import Thumbnail from '../components/Thumbnail';
import { IPost } from '../types/post';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import { getAllPosts } from '../utils/mdxUtils';


type Props = {
  posts:[IPost]
}


const Tech: NextPage<Props> = ({posts}:Props) => {
  return (
    <Layout
      customMeta={{
        title: '요람코 기술 블로그 | TECH',
      }}
    >
      <div className="m-auto flex" style={{width:"1024px"}}>
          <div className="space-y-12 m-auto mt-12 mb-12 w-8/12">
            {
              posts.map((post,i) => (
              <div key={post.slug}>
                <div className="flex">
                  <div className="w-9/12 pr-4">
                    <div className="flex justify-start items-center mb-2">
                      {
                          post.stacks.map((value,iter) =>{
                              return(
                                  <button className="tag-button" key={iter}>{value}</button>
                              )
                          })
                      }
                    </div>
                    <div className="flex">
                      <h2 className="text-4xl font-bold m-0 text-gray-800" style={{"fontFamily":"Noto_Sans"}}>
                        <Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link>
                      </h2>
                    </div>
                    <div className="flex" style={{"fontFamily":"Noto_Sans"}}>
                      <p>{post.description}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm mr-2" style={{"fontWeight":"bold","fontFamily":"Noto_Sans"}}>{post.date}</div>
                      <div className="text-sm" style={{"fontFamily":"Noto_Sans"}}>- {post.writer}</div>
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
                {
                  i < posts.length-1 ?
                  <div className='mt-5'>
                    <hr style={{width:"100%"}}></hr>
                  </div>
                :
                  null
                }
              </div>
              
              ))
            }
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
  ]);

  // retunr the posts props
  return { props: { posts } }
}
