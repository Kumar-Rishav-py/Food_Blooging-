import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Aboutus from 'components/Aboutus'
import Footer from 'components/Footer'
import Carousel from 'components/Carousel'
export default function Home() {
  return (
  <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Header />
    <Aboutus />
    <Carousel />
    <Footer />
   
  </div>
  )
}
