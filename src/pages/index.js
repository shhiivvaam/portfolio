import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image';
// import profilePic from '/public/images/profile/toon1-t.jpeg'
import profilePic from '/public/images/profile/main1.jpg'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>shhiivvaam | Home</title>
        <meta name="description" content="shhiivvam - portfolio website" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col gap-5'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="shhiivvaam"
                className="w-full h-auto pb-3 rounded-full md:inline-block md:w-full "
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              {/* <AnimatedText text="MERN DEV" className='!text-5xl text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              /> */}
              <AnimatedText text="Shivam Kumar ✨" className='!text-5xl text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <AnimatedText text="MERN Dev | Flutter | Data Analytics | Java/python/C++" 
                className='my-5 text-base font-semibold md:text-sm sm:text-xs'
              />
                {/* <p className='my-4 text-center text-base font-semibold md:text-sm sm:text-xs'> Some of the skills I   have worked with include Data Structures and Algorithms (Java), Web Development (MERN), Android Development (Flutter), Data Analysis, Databases (SQL), Linux OS (with Go), and Machine Learning (Python). And whatever skills I may lack, I make up for my determination to learn.
                Outside of tech, I am a lover of Spotify, a runner, an avid actor, and a proud Indian.
              </p> */}
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href="/Shivam_resume.pdf"
                  target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark
                  hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light
                  md:p-2 md:px-4 md:text-base
                  '
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:life.shivam2394@gmail.com"
                  target={"_blank"}
                  className='ml-9 text-lg font-medium font-mono  capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe/> */}
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="shhiivvaam" className='w-[80%] pl-2 h-auto' />
        </div>
      </main>
    </>
  );
}
