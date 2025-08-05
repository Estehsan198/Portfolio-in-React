import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import { useRef } from 'react'
;


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

// const AnimatedGreeting = styled(motion.div)`
//   position: absolute;
//   top: 10%;
//   left: 50%;
//   transform: translateX(-50%);
//   font-size: 2.5rem;
//   color: ${props => props.theme.text};
//   font-family: 'Pacifico', cursive;
//   letter-spacing: 2px;
//   z-index: 2;
//   pointer-events: none;
//   user-select: none;
// `

const BgEffect = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 60% 40%, #ffffff22 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
`

const Tooltip = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.3s;
  box-shadow: 0 2px 8px #0002;
  pointer-events: none;
`
const TopGreeting = styled(motion.div)`
  position: absolute;
  top: 2.5rem;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 3;
  pointer-events: none;
  user-select: none;

  h1 {
    font-size: 2.5rem;
    font-family: 'Pacifico', cursive;
    letter-spacing: 2px;
    text-align: center;
    /* Gradient text: left half dark, right half white */
    background: linear-gradient(
      to right,
      ${props => props.theme.text} 50%,
      #fff 50%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-shadow: 1px 1px 8px rgba(0,0,0,0.15), 1px 1px 8px rgba(255,255,255,0.15);
    transition: background 0.5s;
  }
`

const Main = () => {
    const [click, setClick] = useState(false);
    const [showTip, setShowTip] = useState(false);
    const centerRef = useRef();

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
        <BgEffect />
        <DarkDiv click={click} />
        <TopGreeting
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: 'spring' }}
        >
            <h1>
                {click ? "Let's Create Something Amazing!" : "Welcome to My Portfolio"}
            </h1>
        </TopGreeting>
        <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />

                <Center
                    click={click}
                    ref={centerRef}
                    onMouseEnter={() => setShowTip(true)}
                    onMouseLeave={() => setShowTip(false)}
                >
                    <YinYang
                        onClick={handleClick}
                        width={click ? 120 : 200}
                        height={click ? 120 : 200}
                        fill="currentColor"
                    />
                    <span>click here</span>
                    <Tooltip show={showTip && !click}>Toggle Theme!</Tooltip>
                </Center>

                <Contact target="_blank" href="mailto:estehsanul@gmail.com">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Say hi..
                    </motion.h2>
                </Contact>
                <BLOG to="/blog">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Blog
                    </motion.h2>
                </BLOG>
                <WORK to="/work" click={+click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Work
                    </motion.h2>
                </WORK>
                <BottomBar>
                    <ABOUT to="/about" click={+click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About.
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills.
                        </motion.h2>
                    </SKILLS>
                </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    );
}

export default Main
