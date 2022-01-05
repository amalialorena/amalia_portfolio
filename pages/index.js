import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amalia Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <Projects />
      <Footer />
    </div>
  )
}
