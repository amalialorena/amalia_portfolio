import Head from 'next/head'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Intro from './components/Intro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amalia Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:image" content="https://example.com/ogp.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
}
