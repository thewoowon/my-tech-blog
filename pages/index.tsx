import type { NextPage,GetStaticProps } from 'next'
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Thumbnail from '../components/Thumbnail';
import { IPost } from '../types/post';
import { getAllPosts } from '../utils/mdxUtils';
import Link from 'next/link';

type Props = {
  posts:[IPost]
}

const Home: NextPage<Props> = ({posts}:Props) => {
  return (
    <Layout>
        <div>
          <Slider></Slider>
        </div>
        <div className="m-auto" style={{width:"800px"}}>
          <div className="space-y-12 mt-12 mb-12">
            {
              posts.map((post,i) => (
              <div key={post.slug}>
                <div className="flex">
                  <div className="w-9/12 pr-4">
                    <div className="flex h-10">
                      <h2 className="text-2xl font-bold mb-4" style={{color:"rgba(0,141,178,1)"}}>
                        <Link href={`/posts/${post.slug}`}>
                          <a>{post.title}</a>
                        </Link>
                      </h2>
                    </div>
                    <div className="flex h-16">
                      <p>{post.description}</p>
                    </div>
                    <div className="flex h-8">
                      <div className="text-sm mr-2">{post.date}</div>
                      <div className="text-sm">{post.writer}</div>
                    </div>
                  </div>
                  <div className="w-3/12">
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
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail',
    'writer'
  ]);

  // retunr the posts props
  return { props: { posts } }
}
