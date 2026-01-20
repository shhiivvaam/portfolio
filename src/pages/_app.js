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
        <link rel="icon" href="/images/favicon/shhiivvaam-favicon-black.png" />
        <meta name="author" content="Shivam Kumar" />
        <meta name="keywords" content="Shivam Kumar, Full Stack Developer, Android Developer, Portfolio, Web Development, Software Engineer" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shhiivvaam.ambaycapital.com/" />
        <meta property="og:title" content="Shivam Kumar | Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Shivam Kumar, a Full Stack & Mobile Developer specializing in building exceptional digital experiences." />
        <meta property="og:image" content="/images/profile/main1.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shhiivvaam.ambaycapital.com/" />
        <meta property="twitter:title" content="Shivam Kumar | Full Stack Developer" />
        <meta property="twitter:description" content="Portfolio of Shivam Kumar, a Full Stack & Mobile Developer specializing in building exceptional digital experiences." />
        <meta property="twitter:image" content="/images/profile/main1.jpg" />
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
