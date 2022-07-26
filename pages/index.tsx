import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Slider from '../components/Slider';


const Home: NextPage = () => {
  return (
    <Layout>
        <div>
          <Slider></Slider>
        </div>
        <footer className={styles.footer}>

        </footer>
    </Layout>
  )
}

export default Home
