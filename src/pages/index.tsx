import Head from 'next/head'
import { useSelector } from 'react-redux';
import useCurrentTest from "../hooks/testData";
import Banner from '../components/Banner/Banner';
// import styles from '../styles/Home.module.css'

const Home = ({post}) => {
  const testData = useSelector((state) => state.testData);
  const currentTest = useCurrentTest();
  return (
    <div>
      <Head>
        <title>Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <h2>{currentTest.data && currentTest.data.name}</h2>
      <h1>
        Welcome {testData}
      </h1>
    </div>
  )
}

export default Home;
