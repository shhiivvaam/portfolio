// components/Particles.js

import React from 'react';
import Particles from 'particlesjs';


const ParticlesEffect = () => {
    React.useEffect(() => {
        Particles.init({
            /* Particles.js configuration options go here */
            /* Example configuration: */
            particles: {
                number: {
                    value: 80,
                },
                size: {
                    value: 3,
                },
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
            },
        });
    }, []);

    return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default ParticlesEffect;









// import React from 'react'
// import { useCallback } from 'react'
// import { loadFull } from 'tsparticles'
// import Particles from 'react-particles'
// import particlesConfig from '../config/particles_config'

// const ParticlesBackground = () => {
//     const particlesInit = useCallback(async (engine) => {
//         console.log(engine);

//         await loadFull(engine);
//     }, []);

//     const particlesLoaded = useCallback(async (container) => {
//         await console.log(container)
//     }, []);

//     return (
//         <div id='particles-background'>
//             <Particles
//                 id='tsparticles'
//                 particlesLoaded='particlesLoaded'
//                 init={particlesInit}
//                 options={particlesConfig}
//                 height='100vh'
//                 width='100vw'
//             >
//             </Particles>
//         </div>
//     )
// }
// export default ParticlesBackground;