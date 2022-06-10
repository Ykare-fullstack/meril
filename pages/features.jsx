import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 
import Banner from '../components/organism/Banner'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meril</title>
        <meta name="description" content="projet de recrutement Make the grade" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Banner />
      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
