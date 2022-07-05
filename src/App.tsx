import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const slideContentVariants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: .5,
    },
  }
}

const slideContentExitAnimation = {
  y: -150,
  opacity: 0,
  transition: {
    type: "spring",
    stiffness: 120,
    duration: 1,
  }
}

const App: React.FC = () => {
  const [x, setX] = useState<number>(0);

  const goLeft = () => {
    setX(x + 100)
  }

  const goRight = () => {
    setX(x - 100)
  }

  useEffect(()=>{
    console.log(x)
  }, [x])

  return (
    <div className="App">
      <div className="slider">
        
          <div className="slide slide1" style={{transform:`translateX(${x}%)`}}>
            <div  className="slide-content">
              <AnimatePresence>
                {x === 0 && <motion.h1 
                  variants={slideContentVariants} 
                  initial="hidden" 
                  animate="visible" 
                  exit={slideContentExitAnimation}>
                    RED
                  </motion.h1>}
              </AnimatePresence>
            </div>
          </div>
          <div className="slide slide2" style={{transform:`translateX(${x}%)`}}>
            <div className="slide-content">
              <AnimatePresence>
                {x === -100 && <motion.h1 
                  variants={slideContentVariants} 
                  initial="hidden" 
                  animate="visible" 
                  exit={slideContentExitAnimation}>
                    GREEN
                  </motion.h1>}
              </AnimatePresence>
            </div>
          </div>
          <div className="slide slide3" style={{transform:`translateX(${x}%)`}}>
            <div  className="slide-content">
              <AnimatePresence>
                {x === -200 && <motion.h1 
                  variants={slideContentVariants} 
                  initial="hidden" 
                  animate="visible" 
                  exit={slideContentExitAnimation}>
                    YELLOW
                  </motion.h1>}
              </AnimatePresence>
            </div>
          </div>
          <div className="slide slide4" style={{transform:`translateX(${x}%)`}}>
            <div  className="slide-content">
              <AnimatePresence>
                {x === -300 && <motion.h1 
                  variants={slideContentVariants} 
                  initial="hidden" 
                  animate="visible" 
                  exit={slideContentExitAnimation}>
                    BLUE
                  </motion.h1>}
              </AnimatePresence>
            </div>
          </div>
      </div>
      {x===0 ? null :  <button className="btn-left" onClick={goLeft}>Left</button>}
      {x===-300 ? null : <button className="btn-right" onClick={goRight}>Right</button>}
    </div>
  );
}

export default App;
