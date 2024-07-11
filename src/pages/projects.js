import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'

// Project Pics 
import StudyNotion from '../../public/images/projects/StudyNotion.png';
import akhilyaveda from '../../public/images/projects/akhilyaveda.png';
import RandomGIFgenerator from '../../public/images/projects/RandomGIFgenerator.png';
import FaceRecognition from '../../public/images/projects/FaceRecognition.png';
import MoviesLibrary from '../../public/images/projects/MoviesLibrary.png';
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
import BlogSite from '../../public/images/projects/BlogSite.png';
import StudySphere from '../../public/images/projects/StudySphere.png';
import FarmersFriend from '../../public/images/projects/FarmersFriend.png';
import parallexSite from '../../public/images/projects/parallexSite.png';
import draggable_LSA from '../../public/images/projects/draggable_LSA.png';
import profileShare from '../../public/images/projects/profileShare.png';
import sample_portfolio from '../../public/images/projects/simple_portfolio.png';
import TopCourses from '../../public/images/projects/TopCourses.png';
import TourismPlanner from '../../public/images/projects/tourismPlanner.png';
import wijungle from '../../public/images/projects/wijungle.png';
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
                <FramerImage src={img}
                    alt={title}
                    priority={false}
                    className='w-full h-auto'
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
                <FramerImage
                    src={img}
                    alt={title}
                    className='w-full h-auto'
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
                                img={StudyNotion}
                                summary="EdTech Application -> that serves for online courses selling platform like Udemy and Coursera, this also allows Instructors and Students to enroll themselves, learn and introduce their course respectively. 💀✅"
                                link="https://studynotion-master.vercel.app/"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Farmers Friend"
                                img={FarmersFriend}
                                summary="User-friendly smart agriculture advisory app aimed at providing farmers with essential information and recommendations to enhance crop yield and efficiency in resource usage. 👍✅"
                                link="https://farmer-friends.netlify.app/"
                                github="https://github.com/shhiivvaam/Farmers_Friend"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Chat-App"
                                img={chat}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/chat-app-highthackers/"
                                github="https://github.com/shhiivvaam/chat-app-highthackers.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Study Sphere"
                                img={StudySphere}
                                summary="A React-based web app designed to assist students in discovering and enrolling in courses. It includes a Course Listing page with filters, a detailed Course Details screen, and a Student Dashboard for tracking enrolled courses."
                                link="https://shhiivvaam.github.io/StudySphere/"
                                github="https://github.com/shhiivvaam/StudySphere"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Wijungle"
                                img={wijungle}
                                summary="This project is a React-based dashboard that visualizes data from a backend server. It includes multiple graphs to represent different aspects of the data.✅🧐"
                                link="https://wijungle.netlify.app/"
                                github="https://github.com/shhiivvaam/wijungle"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Movies Library"
                                img={MoviesLibrary}
                                summary="This is a movie library web application with user authentication, movie search, and movie list creation features. Users can create public or private Playlists of their favorite movies."
                                link="https://fasal-movies-library.netlify.app/"
                                github="https://github.com/shhiivvaam/movies-library"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Shopping Cart"
                                img={shoppingCart}
                                summary="React based Shopping Cart application. 🛒🥸ℹ️"
                                link="https://shhiivvaam.github.io/Shopping-Cart/"
                                github="https://github.com/shhiivvaam/Shopping-Cart.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
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
                                title="Blog Site"
                                img={BlogSite}
                                summary="React based blog application with Google SSO and like, share, comment and Repost Features."
                                link="https://shhiivvaam-myblogsite.netlify.app/"
                                github="https://github.com/shhiivvaam/myblogsite"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Random GIF Generator"
                                img={RandomGIFgenerator}
                                summary="Web based Application that generates both Random and User required GIFs"
                                link="https://shhiivvaam.github.io/Random-Gif-Generator/"
                                github="hhttps://github.com/shhiivvaam/Random-Gif-Generator.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Behance - Portfolio"
                                img={sample_portfolio}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/Poject-Behance/"
                                github="https://github.com/shhiivvaam/Poject-Behance.git"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Parralex 3D effects Site"
                                img={parallexSite}
                                // summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/Parrallex-Effect-Page/"
                                github="https://github.com/shhiivvaam/Parrallex-Effect-Page.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Draggable LSA Game"
                                img={draggable_LSA}
                                summary="A Simple Calc Application, build over HTML, CSS AND JS. Aim is to build a game theme calc application, that finds the LSA(Lateral Surface Area) using some values chosen by the user, and tell the user, about the result using some, music and celebration img/gif."
                                link="https://shhiivvaam.github.io/Draggable_LSA_Calc_Game/"
                                github="https://github.com/shhiivvaam/Draggable_LSA_Calc_Game"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Profile Share"
                                img={profileShare}
                                summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/Profile-Share/"
                                github="https://github.com/shhiivvaam/Profile-Share.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Tick Tac Toe"
                                img={TickTacToe}
                                // summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/Tic-Tac-Toe/"
                                github="https://github.com/shhiivvaam/Tic-Tac-Toe.git"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Weather Application"
                                img={WeatherApplication}
                                summary="Weather application, that helps get the right data for users both current and desired location weather update. 👍👍"
                                link="https://shhiivvaam.github.io/Weather-Application/"
                                github="https://github.com/shhiivvaam/Weather-Application.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="AkhilyaVeda"
                                img={akhilyaveda}
                                summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/akhilyaVeda"
                                github="https://github.com/AkhilyaVeda/akhilyaVeda"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Tourism Planner"
                                img={TourismPlanner}
                                // summary="This is a Simple Web-based Chat-app, which uses a Gmail login, and then the user is all set to start chatting.It needs some modification like the user profile and the user id which is not visible right now, but I will do that shortly in the meantime."
                                link="https://shhiivvaam.github.io/Tour-Places/"
                                github="https://github.com/shhiivvaam/Tour-Places.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Top Courses"
                                img={TopCourses}
                                summary="React Application that offer wide range of courses that uses can take, and it also contains Filter based Searching to filter out the interested courses. 🫠🫠"
                                link="https://shhiivvaam.github.io/Top-Courses/"
                                github="https://github.com/shhiivvaam/Top-Courses.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Face Recognition "
                                img={FaceRecognition}
                                // summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://shhiivvaam.github.io/EdTech-Platform"
                                github="https://github.com/shhiivvaam/EdTech-Platform.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Image Gallery"
                                img={imageGallery}
                                // summary="This contains a simple webpage containing some images with interesting UI"
                                link="https://shhiivvaam.github.io/Image-Gallery/"
                                github="https://github.com/shhiivvaam/Image-Gallery.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Windows Area Finder"
                                img={WindowsArea}
                                summary="JavaScript Application that helps know the current screen width and height. It used DOM Structure"
                                link="https://shhiivvaam.github.io/Windows-Area/"
                                github="https://github.com/shhiivvaam/Windows-Area.git"
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
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Ecommerce Application"
                                img={ecommerce}
                                // summary="Patent Project, the idea is to help the doctors get their patients direct reports irrespective of their registeration through thier Identifaction cards like, Aadhaar card and also it shows both the doctor and patients can aknowledge themseleves"
                                link="https://github.com/shhiivvaam/E-Commerce-Application.git"
                                github="https://github.com/shhiivvaam/E-Commerce-Application.git"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Password Generator"
                                img={passwordGenerator}
                                summary="JavaScript application that allows to generate some random and Strong Passwords on users choice, this application also contains options to include various constraints to make to password more stronger."
                                link="https://shhiivvaam.github.io/Password-Generator/"
                                github="https://github.com/shhiivvaam/Password-Generator.git"
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