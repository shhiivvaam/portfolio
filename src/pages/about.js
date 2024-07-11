/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Image from 'next/image';
import FirstImage from '../../public/images/profile/first_image.jpg';
// import SecondImage from '../../public/images/profile/second_image.jpg';
// import ThirdImage from '../../public/images/profile/third_image.jpg';
import AnimatedNumbers from '@/components/AnimatedNumbers';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';

const About = () => {
    return (
        <>
            <Head>
                <title>shhiivvaam | About</title>
                <meta name="description" content="shhiivvaam shivam shivam_kumar_singh #portfolio #about" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text="Discipline | Efforts"
                        className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                                About Me!
                            </h2>
                            <p className='font-medium text-center'>
                                - Hii !🫡 6feet tall explorer here. Nice to meet you.....🙏🤞
                            </p>
                            <p className='my-4 font-medium'>
                                - Striver✨
                            </p>
                            <p className='my-4 font-medium'>
                                - Pursuing a B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning.
                            </p>
                            <p className='my-4 font-medium'>
                                - Challenges excite me, and I am always in awe of the change they drive in the world. Some of the skills I have worked with include Data Structures and Algorithms (Java), Web Development (MERN), Android Development (Flutter), Data Analysis, Databases (SQL), Linux OS (with Go), and Machine Learning (Python). And whatever skills I may lack, I make up for my determination to learn.
                            </p>
                            <p className='font-medium'>
                                - Outside of tech, I am a lover of Spotify, a runner, an avid actor, and a proud Indian.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max w-full rounded-2xl border-2 border-solid border-dark bg-light p-8
                         dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>                     {/* 1.40 */}
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={FirstImage}
                                alt="shhiivvaam"
                                className='w-full h-auto rounded-2xl'
                                priority
                                sizes='(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={8} duration={3000} />+
                                </span>
                                <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>
                                    projects Completed
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={3} duration={3000} />+
                                </span>
                                <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>
                                    Working Projects
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={2} duration={3000} />+
                                </span>
                                <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>
                                    years of Experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Achievements />
                    <Experience />
                    <Education />
                    <Certifications />
                </Layout>
            </main>
        </>
    )
}

export default About