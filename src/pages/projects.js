import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'

import StudyNotion from '../../public/images/projects/StudyNotion.png';
import akhilyaveda from '../../public/images/projects/akhilyaveda.png';
import RandomGIFgenerator from '../../public/images/projects/RandomGIFgenerator.png';
import FaceRecognition from '../../public/images/projects/FaceRecognition.png';
import WeatherApplication from '../../public/images/projects/weatherApplication.png';
import TickTacToe from '../../public/images/projects/TickTacToe.png';
import passwordGenerator from '../../public/images/projects/passwordGenerator.png';
import shoppingCart from '../../public/images/projects/shoppingCart.png';
import ecommerce from '../../public/images/projects/ecommerce.png';
import robo from '../../public/images/projects/robo-app.png';
import chat from '../../public/images/projects/chat-app.png';
import todo from '../../public/images/projects/todos-app.png';
import facebookclone from '../../public/images/projects/facebook_clone.png';
import glass_portfolio from '../../public/images/projects/glassPortfolio.png';
import imageGallery from '../../public/images/projects/imageGallery.png';
import parallexSite from '../../public/images/projects/parallexSite.png';
import profileShare from '../../public/images/projects/profileShare.png';
import sample_portfolio from '../../public/images/projects/simple_portfolio.png';
import TopCourses from '../../public/images/projects/TopCourses.png';
import TourismPlanner from '../../public/images/projects/tourismPlanner.png';
import WindowsArea from '../../public/images/projects/WindowsArea.png';


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            '/>
            <Link
                href={link}
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw, 50vw'
                />                   {/*  Check Out the Framer Image Options */}
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                    '>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col item justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' />
            <Link
                href={link}
                target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
}

const projects = () => {
    return (
        <>
            <Head>
                <title>shhiivvaam | Projects</title>
                <meta name="description" content="shhiivvaam shivam shivam_kumar_singh #portfolio #projects" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="EXPLORE 🫣" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
                    {/* <AnimatedText text="" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl' /> */}
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={akhilyaveda}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={StudyNotion}
                                summary="EdTech Application -> that serves for online courses selling platform like Udemy and Coursera, this also allows Instructors and Students to enroll themselves, learn and introduce their course respectively. 💀✅"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={chat}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Todos(Diary) App"
                                img={todo}
                                summary="It's a simple but mighty task manager(Todos Application) with in-browser local storage. It includes update, delete, and completed features, and you can also add emojis within your tasks, adding a touch of lightness!"
                                link="https://shhiivvaam.github.io/crud-react-app/"
                                github="https://github.com/shhiivvaam/crud-react-app.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Robo Users"
                                img={robo}
                                summary="This is a Web Based React App containing Robot Users where every robot has its name and its face.
                                The dynamics of React can be very well understood by this."
                                link="https://shhiivvaam.github.io/robot-friends/"
                                github="https://github.com/shhiivvaam/robot-friends.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={facebookclone}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={passwordGenerator}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={glass_portfolio}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={imageGallery}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={TickTacToe}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={parallexSite}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={profileShare}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={WeatherApplication}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={sample_portfolio}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={TopCourses}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={FaceRecognition}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={TourismPlanner}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Chat-App"
                                img={WindowsArea}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={ecommerce}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={shoppingCart}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="EdTech Platform"
                                img={RandomGIFgenerator}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default projects