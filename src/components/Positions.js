import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import ListIcon from './ListIcon';

const Details = ({ type, time, place, info }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items justify-between md:w-[80%]'>
            <ListIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {
                        !time && !place
                            ?
                            <></>
                            :
                            { time } | { place }}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
}

const Positions = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Positions Held
            </h2>
            <div ref={ref} className='w-[75] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        info="Teaching Assistant, Coding Ninjas - Resolved doubts for 230+ students"
                    />
                    <Details
                        info="Mentor Full Stack Web Development - Guided 140+ students"
                    />
                    <Details
                        info="Head of Technical Department, Code Busters Club - GLA University"
                    />
                    <Details
                        info="Head of Organising Team, TEDx GLAU - GLA University"
                    />
                    <Details
                        info="Coordinated 3 events and 2 awareness programs for GFG Student Chapter, Entrepreneur’s Cell and Nature’s Club, GLA University"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Positions;