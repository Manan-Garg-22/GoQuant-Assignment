import Head from 'next/head';
import Navbar from './components/Navbar';
import Orderbook from '../app/components/Orderbook';
import CryptoListings from './components/CryptoListings';
import BackgroundCircles from './components/BackgroundCircles';
export default function Home() {
  return (
    <div>
      <Head>
        <title>GoQuant Orderbook</title>
        <meta name="description" content="Realtime crypto orderbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <BackgroundCircles />
        <Orderbook />
        <CryptoListings />
      </main>
    </div>
  );
}