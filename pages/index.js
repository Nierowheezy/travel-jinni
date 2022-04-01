import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />
        </div>
    );
}
