import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'

export const News = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'News UBCARE TECH',
      }}
    >
      <main className={styles.main}>
      
      </main>
    </Layout>
  );
};

export default News;
