import Head from "next/head";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amalia Portfolio</title>
        <meta name="description" content="Amalia Ferariu's portfolio" />
        <meta
          property="og:image"
          content="https://www.amaliaferariu.com/screenshot-portfolio.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.amaliaferariu.com/screenshot-portfolio.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Amalia Ferariu's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}
