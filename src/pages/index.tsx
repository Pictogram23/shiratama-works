import { NextPage } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Container } from 'src/conpoments/Container'
import { Content } from 'src/conpoments/Content'
import { WorkCard } from 'src/conpoments/WorkCard'
import { WorkCardList } from 'src/conpoments/WorkCardList'
import { getAllPosts } from 'src/lib/api'
import Post from '../types/post'
import rehypeRaw from 'rehype-raw'

const Background = () => (
  <>
    <div id="background">
      <video id="background-video" playsInline muted autoPlay loop>
        <source src="background.mp4" />
      </video>
    </div>

    <style jsx>{`
      #background {
        position: fixed;
        z-index: -1;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
        background-color: black;
      }
      #background-video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        opacity: 0.4;

        min-width: 100%;
        min-height: 100%;
      }
    `}</style>
  </>
)

const Top = () => (
  <>
    <Content align="top" height="300px">
      <h1>しらたま の作品集へようこそ！</h1>
      <p>私が過去に制作した、様々な作品を展示しています。</p>
    </Content>
    <style jsx>{`
      * {
        text-align: center;
      }
    `}</style>
  </>
)

type Props = {
  allPosts: Post[]
}

export const HomePage: NextPage = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>しらたま 作品集</title>
      </Head>

      <Container>
        <Background />
        <Top />
        <WorkCardList>
          {allPosts.map((post) => (
            <WorkCard
              maxWidth="480px"
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              key={post.id}
            >
              <ReactMarkdown skipHtml={true} rehypePlugins={[rehypeRaw]}>
                {post.content}
              </ReactMarkdown>
            </WorkCard>
          ))}
        </WorkCardList>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'content',
    'author',
    'initial',
    'id',
  ])

  return {
    props: { allPosts },
  }
}

export default HomePage
