import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const AnimatedNumbers = ({ value , duration}) => {

    const ref = useRef(null);                            // we can also use   const ref = useRef({value});   

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref}>
        </span>
    );
}

export default AnimatedNumbers;