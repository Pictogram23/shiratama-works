import { Avatar, CardHeader, CardMedia } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'src/conpoments/Container'
import { Content } from 'src/conpoments/Content'
import { WorkCard } from 'src/conpoments/WorkCard'
import { WorkCardList } from 'src/conpoments/WorkCardList'

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
      <h1>
        CLARK NEXT Akihabara
        <br />
        ゲーム・プログラミング専攻へようこそ！
      </h1>
      <p>当専攻に所属する生徒が作り上げた、様々な作品を展示しています。</p>
    </Content>
    <style jsx>{`
      * {
        text-align: center;
      }
    `}</style>
  </>
)

const WorkList = () => (
  <>
    <WorkCardList>
      <WorkCard maxWidth="480px">
        <CardHeader
          avatar={<Avatar>EY</Avatar>}
          title="3Dブロック崩し (鬼畜Edit)"
          subheader="September 30, 2020"
        />
        <CardMedia component="img" image="/EY_Works/EY_breakblock_kitiku.png" />
      </WorkCard>
      <WorkCard maxWidth="480px">
        <CardHeader
          avatar={<Avatar>EY</Avatar>}
          title="3Dブロック崩し (鬼畜Edit)"
          subheader="September 30, 2020"
        />
        <CardMedia component="img" image="/EY_Works/EY_breakblock_kitiku.png" />
      </WorkCard>
      <WorkCard maxWidth="480px">
        <CardHeader
          avatar={<Avatar>EY</Avatar>}
          title="3Dブロック崩し (鬼畜Edit)"
          subheader="September 30, 2020"
        />
        <CardMedia component="img" image="/EY_Works/EY_breakblock_kitiku.png" />
      </WorkCard>
    </WorkCardList>
  </>
)

export const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>クラーク Ga専攻 作品集</title>
      </Head>

      <Container>
        <Background />
        <Top />
        <WorkList />
      </Container>
    </>
  )
}

export default HomePage
