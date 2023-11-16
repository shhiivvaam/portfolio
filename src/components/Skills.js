import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 p-8 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-dark xs:dark:text-light xs:font-bold'       // Can change if want to make it fullllllllyyy dark but looks good either

            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            // transition={{ duration: 1.5 }}
            viewport={{ once: true }}                         // can remove this -> if you want to make the Skill Circle Elements make continous change while in View
        >
            {name}
        </motion.div>
    );
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
                Skills
            </h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            dark:text-dark dark:bg-light
                
                lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                md:bg-circularLightMd md:dark:bg-circularDarkMd
                sm:bg-circularLightSm sm:dark:bg-circularDarkSm
                '>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
                    dark:text-dark dark:bg-light
                    lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}
                >
                    ?
                </motion.div>

                <Skill name="Tableau" x="-25vw" y="2vw" />
                <Skill name="Flutter" x="-5vw" y="-10vw" />
                <Skill name="SQL" x="20vw" y="6vw" />
                <Skill name="ReactJS" x="0vw" y="12vw" />
                <Skill name="NextJs" x="-20vw" y="-15vw" />
                <Skill name="ExpressJS" x="15vw" y="-12vw" />
                <Skill name="NodeJs" x="32vw" y="-5vw" />
                <Skill name="Figma" x="0vw" y="-20vw" />
                <Skill name="Firebase" x="-25vw" y="18vw" />
                <Skill name="Tailwind CSS" x="18vw" y="18vw" />


            </div>
        </>
    )
}

export default Skills;