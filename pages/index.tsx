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
              <h3>최근 인기 글</h3>
            </div>
            <ul className="latest-list m-auto">
              <li><Link href={`posts/${1}`}><a>React Native 사용기 #1</a></Link></li>
              <li><Link href={`posts/${2}`}><a>SQL - Four Part Naming의 함정</a></Link></li>
              <li><Link href={`posts/${3}`}><a>실시간 데이터베이스 사용기 (Firebase) 1탄</a></Link></li>
              <li><Link href={`posts/${4}`}><a>실시간 데이터베이스 사용기 (Firebase) 2탄</a></Link></li>
              <li><Link href={`posts/${5}`}><a>Dev Trend 2019 by StackOverflow</a></Link></li>
              <li><Link href={`posts/${6}`}><a>Hello Anko!! - 1탄</a></Link></li>
              <li><Link href={`posts/${7}`}><a>[SQL SERVER] Lock - 01.DeadLock</a></Link></li> 
              <li><Link href={`posts/${8}`}><a>Hello Anko!! - 2탄</a></Link></li>
              <li><Link href={`posts/${9}`}><a>CSS Transform 3D - Part1</a></Link></li>
              <li><Link href={`posts/${10}`}><a>SSMS 소소한 팁!!</a></Link></li>
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
