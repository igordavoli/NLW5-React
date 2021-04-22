import '../styles/global.scss';
import styles from '../styles/app.module.scss'
import { Header } from "../components/Header";
import React from 'react';
import { Player } from '../components/Player';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Component {...pageProps} />
        <Header />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
