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

const About = () => {
    return (
        <>
            <Head>
                <title>shhiivvaam | About</title>
                <meta name="description" content="shhiivvaam shivam shivam_kumar_singh #portfolio #about" />
            </Head>
            <TransitionEffect/>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Discipline Dedication!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                                About Me!
                            </h2>
                            <p className='font-medium text-center'>- Hi, I'm Shivam Kumar, a Web Developer, Android/ios Appplication Developer and Data Analyst.
                            </p>
                            <p className='my-4 font-medium'>- Web Dev is my passion and field of Interest with an aim for creating beautiful, functional,
                                and user-centered digital experiences. With 2 years of experience in the field. I am always looking for
                                new and innovative ways to bring my visions to reality.
                            </p>
                            {/* <p className='my-4 font-medium'>- I believe that design is about more than just making things look pretty – it's about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p> */}
                            <p className='font-medium'>- Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
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
                                    <AnimatedNumbers value={20} duration={3000} />+
                                </span>
                                <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>
                                    projects Completed
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={5} duration={3000} />+
                                </span>
                                <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>
                                    ongoing Projects
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
                    <Experience />
                    <Education />
                    {/* Add  Learnings Page Here          ---->   Must Add All Courses Learning Here                    */}
                </Layout>
            </main>
        </>
    )
}

export default About