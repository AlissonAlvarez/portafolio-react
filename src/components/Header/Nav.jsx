import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const NavContainer = styled(motion.div)`
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  z-index: 6;
  top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};
  transition:all 0.3s ease;
 
`
const MenuItems = styled(motion.ul)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: ${props => props.theme.navHeight};
  background-color: ${props => props.theme.body};
  background-color: ${props => `rgba(${props.theme.textRgba})`};
  list-style:none;  
  width: 100%;
  padding: 0 20;
`

const MenuButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
  list-style-type: none;
  color: ${props => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${props => props.theme.fontmd};
  font-weight:600;
  text-transform: uppercase;
  cursor: pointer;
`
const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${props => props.theme.body};
  `

    function Nav() {
      const [click, setClick] = useState(false);
      return (
        <NavContainer click={click}
          initial={{
            y: '-100%'
          }}
          animate={{
            y: 0
          }}
          transition={{
            duration: 2, delay: 2
          }}>
          <MenuItems
            drag='y'
            dragConstraints={{
              top: 0,
              bottom: 70,
            }}
            dragElastic={0.05}
            dragSnapToOrigin>

            <MenuButton onClick={() => setClick(!click)}>Menu</MenuButton>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuItems>
        </NavContainer >
      )
    }

export default Nav