/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Image from 'next/image';
// import FirstImage from '../../public/images/profile/first_image.jpg';
import FirstImage from '../../public/images/profile/second_image.jpg';
// import ThirdImage from '../../public/images/profile/third_image.jpg';
import AnimatedNumbers from '@/components/AnimatedNumbers';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Positions from '../components/Positions';

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
                            <p className='my-4 font-medium'>
                                - Pursuing a B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning.
                            </p>
                            <p className='font-medium'>
                                - Software Developer with over a year of experience delivering 14 successful projects across Web, Android, and Infrastructure domains. Proficient in Backend and Frontend development, skilled in Data Structures & Algorithms, Full Stack Development, Mobile App Development, UI design, Data Analytics and Machine Learning. Demonstrated ability to take projects from inception to deployment, achieving measurable improvements in user engagement, process efficiency, and cost reduction. 
                            </p>
                            <p className='my-4 font-medium'>
                                - With a strong work ethic and a desire to learn, I am constantly seeking out ways to improve my skills and gain practical experience. Whether it's through internships, extracurricular activities, or networking events, I am committed to making the most of my time as a student and preparing myself for a successful career in the future.
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
                                    <AnimatedNumbers value={14} duration={3000} />+
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
                                    <AnimatedNumbers value={1} duration={3000} />+
                                </span>
                                <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>
                                    years of Experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Achievements />
                    <Positions />
                    <Experience />
                    <Education />
                    <Certifications />
                </Layout>
            </main>
        </>
    )
}

export default About