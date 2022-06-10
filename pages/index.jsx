import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 
import Banner from '../components/organism/Banner'
import Section1 from '../components/organism/Section1'
import Section2 from '../components/organism/Section2'
import Section3 from '../components/organism/Section3'
import Section4 from '../components/organism/Section4'
import Section5 from '../components/organism/Section5'
import Section6 from '../components/organism/Section6'
import Section7 from '../components/organism/Section7'
import Footer from '../components/organism/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meril</title>
        <meta name="description" content="projet de recrutement Make the grade challenge 2 jours" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Banner />
      <main className={styles.main}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>

      <Footer />
        
    </div>
  )
}
