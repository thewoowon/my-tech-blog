import type { NextPage,GetStaticProps } from 'next'
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Thumbnail from '../components/Thumbnail';
import { IPost } from '../types/post';
import { getAllPosts } from '../utils/mdxUtils';
import Link from 'next/link';
import React from 'react' 


type Props = {
  posts:[IPost]
}

const Home: NextPage<Props> = ({posts}:Props) => {
  return (
    <Layout>
        <div>
          <Slider></Slider>
        </div>
        <div className="m-auto flex" style={{width:"1024px"}}>
          <div className="space-y-12 mt-12 mb-12 w-8/12">
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
          <div className="mt-12 mb-12 w-4/12 latest-wrap">
            {/* 최근 글 10가지 */}
            <div className="flex justify-center items-center">
              <h3>최근 올라온 글</h3>
            </div>
            <ul className="latest-list m-auto">
              <li><Link href={`posts/20220904_YORAMCO_1`}><a>요람코 기술블로그, 그 시작의 글</a></Link></li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}

export default Home

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
