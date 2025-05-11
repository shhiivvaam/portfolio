import '@/styles/globals.css'
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/next"

// Importing Font
import { Montserrat } from "next/font/google"
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
// import ParticlesBackground from '../components/ParticlesBackground';

// Images



const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
})

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/images/favicon/shhiivvaam-favicon-black.png" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen `}>
        <NavBar />
        {/* <ParticlesBackground/> */}
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
          <Analytics />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
