import React from 'react';
import { motion } from "motion/react"
import team1 from '../Lottie/team.jpg'
import team2 from '../Lottie/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1 '>
        <motion.img animate={
            {y: [0, 100, 0] }
        
        } transition={{duration: 5, repeat:Infinity}}
      src={team1}
      className="max-w-sm  shadow-2xl border-s-4 border-b-4 border-blue-400 rounded-tl-2xl  rounded-br-3xl"
    />
        <motion.img animate={
            {x: [100, 150, 0, 100] }
        
        } transition={{duration: 10, delay: 3, repeat:Infinity}}
      src={team2}
      className="max-w-sm  shadow-2xl border-s-4 border-b-4 border-blue-400 rounded-tl-2xl  rounded-br-3xl"
    />

    
        </div> 
    <div className='flex-2'>
      <motion.h1  animate={ {
          
          
          x: 200,
          y: -125,
          scale: 1.5,
          
          transition: {duration: 4},
          
      }}
       className="text-5xl font-bold">Remotes <motion.span animate={ {
        
        color: ['#F5846E','#73A611', '#346794'],
        transition: {duration: 4, repeat: Infinity}
        } }>Jobs</motion.span>   for you</motion.h1>

      {/* <motion.h1  animate={ {
          rotate: 180,
          transition: {duration: 4},
          
      }}
       className="text-5xl font-bold">Box Office News!</motion.h1> */}


      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;