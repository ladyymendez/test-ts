import Head from 'next/head'
import { useSelector } from 'react-redux';
import Banner from '../components/Banner/Banner';
import styles from '../styles/Home.module.css'

export default function Home() {
  const testData = useSelector((state) => state.testData);
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {testData}
        </h1>
      </main>
    </div>
  )
}
